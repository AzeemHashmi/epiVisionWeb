from django.db import models

# Create your models here.
class Lookup(models.Model):
    Id = models.AutoField(primary_key=True)
    category = models.CharField(max_length=255)
    value = models.CharField(max_length=255)

    class Meta:
        app_label = 'lookup'
        db_table = 'Lookup'

    def __str__(self):
        return self.value
