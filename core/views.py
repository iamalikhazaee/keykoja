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

class GuestViewSet(viewsets.ModelViewSet):
    queryset = Guest.objects.all()
    serializer_class = GuestSerializer

    @action(detail=True, methods=['Get','put'])
    def deactive_guest(self, request, pk=None):
        Guest = self.get_object()
        Guest.active = True
        Guest.save()
        serializer = self.get_serializer(Guest)
        return Response(serializer.data)
    
    @action(detail=True, methods=['delete','Get'])
    def delete_guest(self, request, pk=None):
        Guest = self.get_object()
        Guest.delete()
        return Response({'Message': 'Object deleted successfully.'},status=status.HTTP_204_NO_CONTENT)

class NewEventViewSet(viewsets.ModelViewSet):
    queryset = Event.objects.all()
    serializer_class = NewEventSerializer

    def create_link():
        pass