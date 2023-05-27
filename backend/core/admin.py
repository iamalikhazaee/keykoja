from django.contrib import admin
from core import models
class PersonAdmin(admin.ModelAdmin):
    list_display = ('first_name',)

admin.site.register(models.ProfileUser,PersonAdmin)
admin.site.register(models.Availability)
admin.site.register(models.Event)
admin.site.register(models.Guest)
admin.site.register(models.Event_time)
# Register your models here.
