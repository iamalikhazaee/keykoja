from django.shortcuts import render
from django.contrib.auth import authenticate

from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.authentication import JWTAuthentication

from datetime import timedelta, datetime

from .models import *
from .serializer import *
# Create your views here.


class CustomLoginView(APIView):
    serializer_class = CustomLoginSerializer

    def post(self, request):
        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)

        email = serializer.validated_data.get('email')
        password = serializer.validated_data.get('password')

        # Authenticate the user
        user = authenticate(request, email=email, password=password)

        if user is not None:
            # Generate new tokens
            refresh_token = RefreshToken.for_user(user)
            access_token = refresh_token.access_token
            

            serialized_user = ProfileSerializer(user).data
            # Return the tokens in the response
            return Response({
                'refresh': str(refresh_token),
                'access': str(access_token),
                'user': serialized_user
            })
        else:
            # Authentication failed
            return Response({'detail': 'Authentication failed'})


class RegisterViewSet(viewsets.ModelViewSet):
    queryset = ProfileUser.objects.all()
    serializer_class = ProfileSerializer


class ProfileViewSet(viewsets.ModelViewSet):
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]
    
    serializer_class = ProfileSerializer

    def get_queryset(self):
        user = self.request.user
        queryset = ProfileUser.objects.filter(email=user.email)
        return queryset

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

    def create_link(self):
        pass

class EventTimeViewSet(viewsets.ModelViewSet):
    queryset = Event_time.objects.all()
    serializer_class = EventTimeSerializer