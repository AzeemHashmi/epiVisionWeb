from django.shortcuts import render
from .models import *
from datetime import datetime
from django.http import JsonResponse


# Create your views here.
def get_patients(request):
    print('Function called')
    data = list(patient_hyp.objects.values())  # wrap in list(), because QuerySet is not JSON serializable
    print (data)
    return JsonResponse(data, safe=False)