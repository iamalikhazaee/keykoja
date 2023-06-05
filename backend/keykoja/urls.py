"""
URL configuration for keykoja project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path,include
from core import url as app_url
from core.views import CustomLoginView,voucher



urlpatterns = [
    path('admin/', admin.site.urls),
    path('core/', include(app_url)),
    path('core/login/', CustomLoginView.as_view()),
    path('__debug__/', include('debug_toolbar.urls')),
    path('<str:username>/<str:event_name>/', voucher.as_view({'get': 'list'}) , name='event'),
]
