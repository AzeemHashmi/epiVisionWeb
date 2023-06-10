from django.shortcuts import render
from rest_framework import viewsets
from .models import *
from .serializers import *
from django.http import JsonResponse
import json
# Create your views here.

class ActivitiesViewSet(viewsets.ModelViewSet):
    queryset = Activities.objects.all()
    serializer_class = ActivitiesSerializer

def all_activities(request):
    print("I AM in activities list")
    act = Activities.objects.all()
    print(type(act))
    print(act)
    data = list(act.values())
    print(data)
    # json_data = serializers.serialize('json', data)
    json_data = json.dumps(data)
    print('Before printing data')
    return JsonResponse(json_data, safe=False)