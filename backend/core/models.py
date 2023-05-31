from datetime import timedelta
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager ,PermissionsMixin
from rest_framework_simplejwt.tokens import RefreshToken    
from django.db import models
from django.contrib.postgres.fields import ArrayField
from django.contrib.auth.models import User
# Create your models here.
from django.conf import settings
from django.db.models.signals import post_save
from django.dispatch import receiver
from rest_framework.authtoken.models import Token


class Availability(models.Model):
    profile = models.ForeignKey('ProfileUser', on_delete=models.CASCADE)
    DAYS_OF_WEEK = (
        ('Monday', 'Monday'),
        ('Tuesday', 'Tuesday'),
        ('Wednesday', 'Wednesday'),
        ('Thursday', 'Thursday'),
        ('Friday', 'Friday'),
        ('Saturday', 'Saturday'),
        ('Sunday', 'Sunday')
    )
    day_of_week = models.CharField(max_length=255 ,choices=DAYS_OF_WEEK)
    start_time = models.TimeField()
    end_time = models.TimeField()
    
    class Meta:
        db_table = ''
        managed = True
        # unique_together = ('profile',)
        verbose_name = 'Availability'
        verbose_name_plural = 'Availabilities'

    def __str__(self):
        return  f'{self.profile}' + "-----" + f'{self.day_of_week}' + "-----" + f'{str(self.start_time)}'


class MyProfileUserManager(BaseUserManager):
    def create_user(self, email, password=None, **extra_fields):
        if not email:
            raise ValueError("The Email field must be set")
        
        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)
        return self.create_user(email, password, **extra_fields)


class ProfileUser(AbstractBaseUser,PermissionsMixin):
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=255)
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    domain = models.CharField(max_length=50, unique=True)

    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)

    objects = MyProfileUserManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['domain']  
    
    @property
    def token(self):
        refresh = RefreshToken.for_user(self)
        return {
            'refresh': str(refresh),
            'access': str(refresh.access_token),
        }

# class Profile(models.Model):
#     user = models.OneToOneField(User , on_delete=models.CASCADE ,null=True,blank=True)
#     email = models.EmailField(null=False, blank=False ,unique=True)
#     password = models.CharField(max_length=255)

#     first_name = models.CharField(max_length=255)
#     last_name = models.CharField(max_length=255)
#     domain = models.CharField(max_length=50,unique=True)

#     def save(self, *args, **kwargs):
#         if not self.pk:  # If the profile is being created
#             user = User.objects.create_user(username=self.domain, email=self.email, password=self.password)
#             user.first_name = self.first_name
#             user.last_name = self.last_name
#             user.save()
#             self.user = user
#         super().save(*args, **kwargs)

#     # availability = models.ManyToManyField(Availability)
#     # free_time = ArrayField(ArrayField(models.CharField(max_length=10), size=2), default=list)
#     def __str__(self):
#        return self.first_name + self.last_name

#     class Meta:
#         db_table = ''
#         managed = True
#         verbose_name = 'Profile'
#         verbose_name_plural = 'Profiles'


class Event(models.Model):
    owner = models.ForeignKey(ProfileUser,on_delete=models.CASCADE)
    name = models.CharField(max_length=255, null=False, blank=False)
    MY_CHOICES_type = (
        ('یک به یک', 'یک به یک'),
        ('گروهی', 'گروهی')
    )
    type = models.CharField(max_length=50, choices=MY_CHOICES_type)
    # time = models.TimeField()
    time_unit = models.DecimalField(max_digits=5, decimal_places=1, default=1.5)
    MY_CHOICES_place = (
        ('حضوری', 'حضوری'),
        ('Google meet', 'Google meet'),
        ('Skype', 'Skype'),
        ('Whatsapp', 'Whatsapp'),
    )
    place = models.CharField(max_length=50, choices=MY_CHOICES_place)
    address = models.CharField(max_length=255,default=' ',blank=True)
    massage = models.TextField(blank=True)
    event_domain = models.CharField(max_length=255)

    #advanced setting 
    # event_per_day = models.IntegerField(default=5)
    # rest_before = models.TimeField()
    # rest_after = models.TimeField()

    def __str__(self):
        return self.event_domain

    class Meta:
        db_table = ''
        managed = True
        verbose_name = 'Event'
        verbose_name_plural = 'Events'


class Event_time(models.Model):
    profile = models.ForeignKey(ProfileUser , on_delete=models.CASCADE,null=True)
    event = models.ForeignKey(Event, on_delete=models.CASCADE,null=True)
    date = models.DateField(null=True)
    start_hour = models.TimeField()
    # time_unit = models.DecimalField(max_digits = 5,decimal_places = 1,default=1.5) 
    duration = models.DurationField(default=timedelta(hours=1, minutes=30))
    end_hour = models.DateTimeField(null=True, blank=True)  
    is_enable = models.BooleanField(default=True)

    # def save(self, *args, **kwargs):
    #     if self.start_hour and self.duration:
    #         self.end_hour = self.start_hour + self.duration
    #     super().save(*args, **kwargs)


class Guest(models.Model):
    name = models.CharField(max_length=50)
    email = models.EmailField()
    event = models.ForeignKey('Event',on_delete=models.CASCADE)
    time = models.OneToOneField(to=Event_time, on_delete=models.CASCADE)
    approve = models.BooleanField(default=False)
    

    def __str__(self):
        return f'{self.name}'

    class Meta:
        db_table = ''
        managed = True
        verbose_name = 'Guest'
        verbose_name_plural = 'Guests'

# @receiver(post_save, sender = settings.AUTH_USER_MODEL)
# def create_auth_token(sender,instance = None,created = False , **kwargs):
#     if created :
#         Token.objects.create( user = instance)