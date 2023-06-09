from django.shortcuts import render
from rest_framework import viewsets
from .models import *
from .serializers import *

# Create your views here.

class CaretakerViewSet(viewsets.ModelViewSet):
    queryset = Caretaker.objects.all()
    serializer_class = CaretakerSerializer
