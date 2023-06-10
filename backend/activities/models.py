from django.db import models

# Create your models here.
class Activities(models.Model):
    Id = models.AutoField(primary_key=True)
    act_name = models.CharField(max_length=20)

    class Meta:
        app_label = 'activities'
        db_table = 'Activities'

    def __str__(self):
        return self.act_name