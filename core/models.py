from django.db import models

# Create your models here.

class Time(models.Model):
    day = models.DateField()
    hour = models.DateTimeField()
    def __str__(self):
        self.day + self.hour

    class Meta:
        db_table = ''
        managed = True
        verbose_name = 'Time'
        verbose_name_plural = 'Times'

class Profile(models.Model):
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    email = models.EmailField(null=False, blank=False)
    phone = models.CharField(max_length=50)
    time = models.ForeignKey(Time, on_delete=models.CASCADE)
    def __str__(self):
        pass

    class Meta:
        db_table = ''
        managed = True
        verbose_name = 'Profile'
        verbose_name_plural = 'Profiles'