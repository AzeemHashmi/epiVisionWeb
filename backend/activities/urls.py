from .views import *
from django.urls import include, path


urlpatterns = [
    path('activities/', all_activities)

]