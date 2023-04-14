from django.shortcuts import render

from rest_framework import viewsets

from .models import *
from .serializer import *
# Create your views here.
class ProfileViewSet(viewsets.ModelViewSet):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer

class NewEventViewSet(viewsets.ModelViewSet):
    queryset = Event.objects.all()
    serializer_class = NewEventSerializer