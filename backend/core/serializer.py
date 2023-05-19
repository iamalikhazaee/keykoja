from rest_framework import serializers
from .models import *

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id','username','password','email']
class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = ["id", "email", "password", "first_name", "last_name", "domain"]

class AvailabilitySerializer(serializers.ModelSerializer):
    class Meta:
        model = Availability
        fields = ["id", "profile", "day_of_week", "start_time", "end_time"]

class GuestSerializer(serializers.ModelSerializer):
    class Meta:
        model = Guest
        fields = "__all__"

class NewEventSerializer(serializers.ModelSerializer):

     class Meta:
        model = Event
        fields = ["id", 'owner', 'name', 'type', 'place', 'massage', 'event_domain', "time_unit"]

class EventTimeSerializer(serializers.ModelSerializer):

     class Meta:
        model = Event_time
        fields = ["id", 'profile', 'event', 'date', 'start_hour', 'duration', 'end_hour', 'is_enable']
# 'profile','event',