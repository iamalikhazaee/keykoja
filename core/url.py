from rest_framework.routers import DefaultRouter
from django.urls import path, include
from .views import *


router = DefaultRouter()
router.register(r'Profiles', ProfileViewSet, basename='Profiles')
router.register(r'NewEvent', NewEventViewSet, basename='New_Event')

urlpatterns = [
    path('', include(router.urls))
]
