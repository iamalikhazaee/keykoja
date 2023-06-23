from rest_framework.routers import DefaultRouter

from django.urls import path, include

from .views import *


router = DefaultRouter()

router.register(r'register', RegisterViewSet, basename='register')
router.register(r'Profiles', ProfileViewSet, basename='Profiles')
router.register(r'GuestsReg', GuestRegisterViewSet, basename='GuestsReg')
router.register(r'GuestsList', GuestViewSet, basename='GuestsList')
router.register(r'NewEvent', NewEventViewSet, basename='New_Event')
router.register(r'EventTime', EventTimeViewSet, basename='Event_Time')
urlpatterns = [
    path('', include(router.urls))
]
