from django.shortcuts import render

from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework import status
from datetime import timedelta, datetime

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
    
    @action(detail=True, methods=['get'])
    def free_times(self, request, pk=None):
        profile = self.get_object()
        availability = Availability.objects.filter(profile = profile)
        serializer = AvailabilitySerializer(availability, many =True)
        return Response(serializer.data)

class AvailabilityViewset(viewsets.ModelViewSet):
    queryset =  Availability.objects.all()
    serializer_class = AvailabilitySerializer
    
    # @action(detail=True, methods=['get'], url_path='time-units')
    # def get_time_units(self, request, pk=None):
    #     availability = Availability.objects.get(pk=pk)
    #     start_hour = availability.start_time.hour
    #     end_hour = availability.end_time.hour
    #     count = (end_hour - start_hour)/unit_time
    #     time_units = []
    #     time_units.append(start_hour)

    #     while count > 0 :
    #         start_hour = start_hour + unit_time
    #         count = count - 1 
    #         if (start_hour <= end_hour) and (start_hour + unit_time <= end_hour) :
    #             time_units.append(start_hour)

    #     return Response({
    #         'start_hour': start_hour,
    #         'end_hour': end_hour,
    #         'time_units': time_units,
    #     })
    
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

class EventTimeViewSet(viewsets.ModelViewSet):
    queryset = Event_time.objects.all()
    serializer_class = EventTimeSerializer