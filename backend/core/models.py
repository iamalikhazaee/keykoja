from datetime import timedelta
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager ,PermissionsMixin
from rest_framework_simplejwt.tokens import RefreshToken    
from django.db import models
import datetime
from django.contrib.postgres.fields import ArrayField
from django.contrib.auth.models import User
# Create your models here.
from django.conf import settings
from django.db.models.signals import post_save
from django.dispatch import receiver
from rest_framework.authtoken.models import Token


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
    MY_CHOICES_ACTIVATION = (
        ('درمانی', 'درمانی'),
        ('آموزشی', 'آموزشی'),
        ('اداری', 'اداری')
    )
    MY_CHOICES_THEME = (
        ('theme 1', 'theme 1'),
        ('theme 2', 'theme 2'),
        ('theme 3', 'theme 3')
    )
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=255)
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    domain = models.CharField(max_length=50, unique=True)
    avatar = models.ImageField(blank=True)
    theme = models.CharField(max_length=50 ,choices= MY_CHOICES_THEME , default='theme 1')
    about = models.TextField(default=' ', blank= True)
    position = models.CharField(max_length=255 , default=' ',blank= True)
    activation_field = models.CharField(max_length=50 , choices=MY_CHOICES_ACTIVATION , default='درمانی')

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
        ('گوگل میت', 'گوگل میت'),
        ('اسکایپ', 'اسکایپ'),
        ('واتساپ', 'واتساپ'),
    )
    place = models.CharField(max_length=50, choices=MY_CHOICES_place)
    address = models.CharField(max_length=255,default=' ',blank=True)
    massage = models.TextField(blank=True)
    event_domain = models.CharField(max_length=255)
    is_enable = models.BooleanField(default=True)
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
    date = models.CharField(max_length=255, null=False, default=datetime.date.today())
    start_hour = models.CharField(max_length=255, null=False, default=datetime.time().strftime('%H:%M'))
    # time_unit = models.DecimalField(max_digits = 5,decimal_places = 1,default=1.5) 
    duration = models.DurationField(default=timedelta(hours=1, minutes=30))
    end_hour = models.CharField(max_length=255, null=False, default=datetime.time().strftime('%H:%M'))
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

