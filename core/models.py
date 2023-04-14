from django.db import models

# Create your models here.

class Availability(models.Model):
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
        verbose_name = 'Availability'
        verbose_name_plural = 'Availabilities'

    def __str__(self):
        return  f'{self.day_of_week}' + f'{str(self.start_time)}'
    
class Profile(models.Model):
    email = models.EmailField(null=False, blank=False)
    password = models.CharField(max_length=255)

    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    domain = models.CharField(max_length=50)
    
    availability = models.ManyToManyField(Availability)
    def __str__(self):
        self.first_name + self.last_name

    class Meta:
        db_table = ''
        managed = True
        verbose_name = 'Profile'
        verbose_name_plural = 'Profiles'


class Event(models.Model):
    name = models.CharField(max_length=255,null=False,blank=False)
    MY_CHOICES_type = (
        ('a', 'یک به یک'),
        ('b', 'گروهی')
    )
    type = models.CharField(max_length=1, choices=MY_CHOICES_type)
    time = models.TimeField()
    MY_CHOICES_place = (
        ('a', 'حضوری'),
        ('b', 'Google meet'),
        ('c', 'Skype'),
        ('d', 'Whatsapp'),
    )
    place = models.CharField(max_length=1, choices=MY_CHOICES_place)
    massage = models.TextField(blank=True)
    event_domain = models.CharField(max_length=255)


    def __str__(self):
        self.event_domain

    class Meta:
        db_table = ''
        managed = True
        verbose_name = 'Event'
        verbose_name_plural = 'Events'