from rest_framework import serializers
from .models import *

class ActivityLogsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Activity_Logs
        fields = '__all__'
