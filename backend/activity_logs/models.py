from django.db import models
from patients.models import Patients
from caretaker.models import Caretaker
from activities.models import Activities


# Create your models here.
class Activity_Logs(models.Model):
    time = models.DateTimeField(auto_now_add=True)
    pat_id = models.ForeignKey( Patients , on_delete=models.CASCADE , db_column='pat_id')
    caretaker_id = models.ForeignKey( Caretaker , on_delete=models.CASCADE , db_column='caretaker_id')
    act_id = models.ForeignKey( Activities , on_delete=models.CASCADE , db_column='act_id')

    class Meta:
        app_label = 'activity_logs'
        db_table = 'Activity_Logs'