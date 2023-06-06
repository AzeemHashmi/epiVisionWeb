from django.shortcuts import render
from .models import *
from datetime import datetime
from django.http import JsonResponse
# from django.views.decorators.csrf import csrf_exempt
# from ..users import Users


# Create your views here.
def get_patients(request):
    print('Function called')
    data = list(patient_hyp.objects.values())  # wrap in list(), because QuerySet is not JSON serializable
    print (data)
    return JsonResponse(data, safe=False)

# def get_users(request):
#     q = request.GET.get("q")
    
#     def search(data):
#         return [item for item in data if any(item[key].lower().find(q.lower()) != -1 for key in KEYS)]
    
#     if q:
#         result = search(Users)[:10]
#     else:
#         result = Users[:10]
    
#     return JsonResponse(result, safe=False)