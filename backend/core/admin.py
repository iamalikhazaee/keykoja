from django.contrib import admin
from core import models

admin.site.register(models.ProfileUser)
admin.site.register(models.Event)
admin.site.register(models.Guest)
admin.site.register(models.Event_time)
# Register your models here.
