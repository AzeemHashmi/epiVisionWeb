from django.contrib import admin
from django.urls import path, include
from .views import *

urlpatterns = [
    path('admin/', admin.site.urls),
    # path("", home),
    # path('add', add),
    path('get_patients', get_patients),

]