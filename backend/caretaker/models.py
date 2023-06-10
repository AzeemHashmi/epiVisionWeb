from django.db import models
from lookup.models import Lookup

# Create your models here.
class Caretaker(models.Model):
    Id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=255)
    contact = models.CharField(max_length=15)
    age = models.IntegerField()
    gender = models.ForeignKey(Lookup, on_delete=models.CASCADE , db_column='gender')
    email = models.EmailField()

    class Meta:
        app_label = 'caretaker'
        db_table = 'Caretaker'

    def __str__(self):
        return self.name