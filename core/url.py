from rest_framework.routers import DefaultRouter
from django.urls import path, include
from .views import *


router = DefaultRouter()
router.register(r'Profiles', ProfileViewSet, basename='Profiles')
router.register(r'NewEvent', NewEventViewSet, basename='New_Event')
router.register(r'Guests', GuestViewSet, basename='Guests')
router.register(r'Availability', AvailabilityViewset, basename='Availabilities')

urlpatterns = [
    path('', include(router.urls))
]
