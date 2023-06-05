from django.db import models
from django.db.models.fields import DateTimeField


# Create your models here.

class patient(models.Model):
    id = models.IntegerField(primary_key=True)
    patient_name = models.CharField(max_length=50)
    
    class Meta:
        # managed = False 
        db_table = 'patient'  
  



class patient_hyp(models.Model):
    time = DateTimeField(primary_key=True, auto_now=True)
    pat = models.ForeignKey(patient, on_delete=models.RESTRICT)
    # pat_id = models.IntegerField()
    activity = models.CharField(max_length=50)
    
    class Meta:
        # managed = False 
        db_table = 'patient_hyp'  

   