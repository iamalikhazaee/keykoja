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

class ThemeViewSet(viewsets.ModelViewSet):
    queryset = Theme.objects.all()
    serializer_class = themeSerializer

    def get_queryset(self):
        return self.queryset
    
class ProfileViewSet(viewsets.ModelViewSet):
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]
    
    serializer_class = ProfileSerializer
    
    def get_queryset(self):
        user = self.request.user
        queryset = ProfileUser.objects.filter(email=user.email)
        return queryset

    def update(self, request, *args, **kwargs):
        partial = kwargs.pop('partial', True)
        instance = self.get_object()
        serializer = self.get_serializer(instance, data=request.data, partial=partial)
        serializer.is_valid(raise_exception=True)
        self.perform_update(serializer)
        return Response(serializer.data)

    def perform_update(self, serializer):
        serializer.save()

class GuestViewSet(viewsets.ModelViewSet):
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]

    serializer_class = GuestListSerializer

    def get_queryset(self):
        user = self.request.user
        queryset = Guest.objects.select_related('event','time').filter(event__owner = user).order_by('time')
        return queryset
    
    @action(detail=True, methods=['Get','put'])
    def approve(self, request, pk=None):
        Guest = self.get_object()
        Guest.approve = True
        Guest.save()
        serializer = self.get_serializer(Guest)
        return Response(serializer.data)

class GuestRegisterViewSet(viewsets.ModelViewSet):
    queryset = Guest.objects.all()
    serializer_class = GuestSerializer

class NewEventViewSet(viewsets.ModelViewSet):
    # queryset = Event.objects.all()
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]

    serializer_class = NewEventSerializer

    def get_queryset(self):
        user = self.request.user
        queryset = Event.objects.filter(owner=user).order_by('-is_enable') 
        return queryset

    def create_link(self):
        pass

class EventTimeViewSet(viewsets.ModelViewSet):
    queryset = Event_time.objects.all()
    serializer_class = EventTimeSerializer

class voucher(viewsets.ModelViewSet):
    serializer_class = NewEventSerializer
    def get_queryset(self):
        username = self.kwargs.get('username')
        event_name = self.kwargs.get('event_name')
        queryset = Event.objects.filter(event_domain = event_name , owner__domain = username , is_enable = True)
        return queryset

class getTimeForReservation(viewsets.ModelViewSet):
    serializer_class = EventTimeSerializer
    def get_queryset(self):
        username = self.kwargs.get('username')
        event_name = self.kwargs.get('event_name')
        queryset = Event_time.objects.filter(event__event_domain = event_name , profile__domain = username)
        return queryset
    
class getEventForLink(viewsets.ModelViewSet):
    def get_serializer_class(self):
        return NewEventSerializer
    # serializers = NewEventSerializer
    def get_queryset(self):
        username = self.kwargs.get('username')
        queryset = Event.objects.filter(owner__domain = username)
        return queryset