from rest_framework import serializers
from .models import *


class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = ["email", "password", "first_name", "last_name", "domain"]

class AvailabilitySerializer(serializers.ModelSerializer):
    class Meta:
        model = Availability
        fields = ["profile", "day_of_week", "start_time", "end_time", "time_unit", "type_unit"]

class GuestSerializer(serializers.ModelSerializer):
    class Meta:
        model = Guest
        fields = "__all__"

class NewEventSerializer(serializers.ModelSerializer):

     class Meta:
        model = Event
        fields = ['owner', 'name', 'type', 'time', 'place', 'massage', 'event_domain']

