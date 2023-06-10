from django.shortcuts import render
from rest_framework import viewsets
from .models import *
from .serializers import *

# Create your views here.

class ActivityLogsViewSet(viewsets.ModelViewSet):
    queryset = Activity_Logs.objects.all()
    serializer_class = ActivityLogsSerializer