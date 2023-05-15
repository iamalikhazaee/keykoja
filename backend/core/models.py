from datetime import timedelta
from django.db import models
from django.contrib.postgres.fields import ArrayField
# Create your models here.


class Availability(models.Model):
    profile = models.ForeignKey('Profile', on_delete=models.CASCADE)
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
    
class Profile(models.Model):
    email = models.EmailField(null=False, blank=False)
    password = models.CharField(max_length=255)

    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    domain = models.CharField(max_length=50)
    
    # availability = models.ManyToManyField(Availability)
    # free_time = ArrayField(ArrayField(models.CharField(max_length=10), size=2), default=list)
    def __str__(self):
       return self.first_name + self.last_name

    class Meta:
        db_table = ''
        managed = True
        verbose_name = 'Profile'
        verbose_name_plural = 'Profiles'


class Event(models.Model):
    owner = models.ForeignKey(Profile,on_delete=models.CASCADE)
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
    profile = models.ForeignKey(Profile , on_delete=models.CASCADE,null=True)
    event = models.ForeignKey(Event, on_delete=models.CASCADE,null=True)
    start_hour = models.DateTimeField()
    # time_unit = models.DecimalField(max_digits = 5,decimal_places = 1,default=1.5) 
    duration = models.DurationField(default=timedelta(hours=1, minutes=30))
    end_hour = models.DateTimeField(null=True, blank=True)  
    is_enable = models.BooleanField(default=True)

    def save(self, *args, **kwargs):
        if self.start_hour and self.duration:
            self.end_hour = self.start_hour + self.duration
        super().save(*args, **kwargs)


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
