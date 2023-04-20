from django.contrib import admin
from core import models
class PersonAdmin(admin.ModelAdmin):
    list_display = ('first_name',)

admin.site.register(models.Profile,PersonAdmin)
admin.site.register(models.Availability)
admin.site.register(models.Event)
admin.site.register(models.Guest)
# Register your models here.
