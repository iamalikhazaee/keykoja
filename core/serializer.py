from rest_framework import serializers
from .models import *


class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = ["first_name"]

class GuestSerializer(serializers.ModelSerializer):
    class Meta:
        model = Guest
        fields = "__all__"

class NewEventSerializer(serializers.ModelSerializer):

     class Meta:
        model = Event
        fields = ['name', 'type', 'time', 'place', 'massage', 'event_domain']