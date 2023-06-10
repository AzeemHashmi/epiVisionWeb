from django.db import models
from caretaker.models import Caretaker
from lookup.models import Lookup
from accounts.models import Accounts

# Create your models here.
class Patients(models.Model):
    Id = models.AutoField(primary_key=True)
    caretaker_id = models.ForeignKey(Caretaker, on_delete=models.CASCADE, db_column='caretaker_id')
    Full_Name = models.CharField(max_length=255)
    contact = models.CharField(max_length=15)
    age = models.IntegerField()
    gender = models.ForeignKey(Lookup, on_delete=models.CASCADE , db_column='gender')
    email = models.EmailField()
    weight = models.IntegerField()
    account_id = models.ForeignKey(Accounts, on_delete=models.CASCADE , db_column='account_id')


    class Meta:
        app_label = 'patients'
        db_table = 'Patients '

    def __str__(self):
        return self.name