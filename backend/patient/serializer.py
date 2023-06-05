from rest_framework import serializers 
from .models import patient_hyp


class patientSerializer(serializers.ModelSerializer):
 
    class Meta:
        model = patient_hyp
        fields = (
                    'time',
                  'pat',                  
                'activity')