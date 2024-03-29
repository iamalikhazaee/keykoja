from rest_framework import serializers
from rest_framework_simplejwt.tokens import RefreshToken

from .models import *

class CustomLoginSerializer(serializers.Serializer):
    email = serializers.EmailField()
    password = serializers.CharField()

    def validate(self, attrs):
        email = attrs.get('email')
        password = attrs.get('password')

        # Perform additional validation if needed
        # For example, check if the email and password are valid

        return attrs


class themeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Theme
        fields = ['id','color_name','pallete_1','pallete_2','pallete_3']
class ProfileSerializer(serializers.ModelSerializer):

    # theme = serializers.PrimaryKeyRelatedField(queryset=Theme.objects.all())
    theme = themeSerializer(read_only=True)
    theme_id = serializers.PrimaryKeyRelatedField(queryset=Theme.objects.all(), source='theme', write_only=True)
    class Meta:
        model = ProfileUser
        fields = ['id','email', 'password', 'first_name', 'last_name', 'domain','avatar','theme','theme_id','about','position','activation_field', 'token']
        extra_kwargs = {'password': {'write_only': True}}

    def get_token(self, obj):
        refresh = RefreshToken.for_user(obj)
        return {
            'refresh': str(refresh),
            'access': str(refresh.access_token),
        }

    def create(self, validated_data):
        user = ProfileUser.objects.create_user(**validated_data)
        return user

class NewEventSerializer(serializers.ModelSerializer):

     class Meta:
        model = Event
        fields = ["id", 'owner', 'name', 'type', 'place', 'address', 'massage', 'event_domain', "time_unit","is_enable"]

class EventTimeSerializer(serializers.ModelSerializer):

     class Meta:
        model = Event_time
        fields = ["id", 'profile', 'event', 'date', 'start_hour', 'end_hour', 'is_enable']

class GuestSerializer(serializers.ModelSerializer):

    class Meta:
        model = Guest
        fields = "__all__"


class GuestListSerializer(serializers.ModelSerializer):

    event = NewEventSerializer()
    time = EventTimeSerializer()
    class Meta:
        model = Guest
        fields = "__all__"