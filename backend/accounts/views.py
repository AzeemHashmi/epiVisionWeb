from django.shortcuts import render
# from django.db.backends import postgresql
from .models import *
from datetime import datetime
from django.http import JsonResponse
from rest_framework import viewsets
from .serializers import *

# # Create your views here.

class AccountsViewSet(viewsets.ModelViewSet):
    queryset = Accounts.objects.all()
    serializer_class = AccountsSerializer