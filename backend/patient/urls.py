from django.contrib import admin
from django.urls import path, include
from .views import *

urlpatterns = [
    path('admin/', admin.site.urls),

    path('get_patients', get_patients),
    # path("", get_users, name="get_users"),

]