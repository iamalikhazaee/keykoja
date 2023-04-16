from django.shortcuts import render

from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework import status


from .models import *
from .serializer import *
# Create your views here.
class ProfileViewSet(viewsets.ModelViewSet):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer

    @action(detail=True, methods=['get'])
    def events(self, request, pk=None):
        profile = self.get_object()
        events = Event.objects.filter(owner=profile)
        serializer = NewEventSerializer(events, many=True)
        return Response(serializer.data)
    
    @action(detail=True, methods=['get'])
    def guests(self, request, pk=None):
        profile = self.get_object()
        guests = Guest.objects.filter(event__owner=profile)
        serializer = GuestSerializer(guests, many=True)
        return Response(serializer.data)
    
class GuestViewSet(viewsets.ModelViewSet):
    queryset = Guest.objects.all()
    serializer_class = GuestSerializer

    @action(detail=True, methods=['Get','put'])
    def approve(self, request, pk=None):
        Guest = self.get_object()
        Guest.approve = True
        Guest.save()
        serializer = self.get_serializer(Guest)
        return Response(serializer.data)
    

class NewEventViewSet(viewsets.ModelViewSet):
    queryset = Event.objects.all()
    serializer_class = NewEventSerializer

    def create_link():
        pass