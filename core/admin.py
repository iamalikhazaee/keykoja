from django.contrib import admin
from core import models

admin.site.register(models.Profile)
admin.site.register(models.Availability)
admin.site.register(models.Event)
admin.site.register(models.Guest)
# Register your models here.
