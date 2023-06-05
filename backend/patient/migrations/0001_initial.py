# Generated by Django 4.2 on 2023-06-05 09:46

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='patient',
            fields=[
                ('id', models.IntegerField(primary_key=True, serialize=False)),
                ('patient_name', models.CharField(max_length=50)),
            ],
            options={
                'db_table': 'patient',
            },
        ),
        migrations.CreateModel(
            name='patient_hyp',
            fields=[
                ('time', models.DateTimeField(auto_now=True, primary_key=True, serialize=False)),
                ('activity', models.CharField(max_length=50)),
                ('pat', models.ForeignKey(on_delete=django.db.models.deletion.RESTRICT, to='patient.patient')),
            ],
            options={
                'db_table': 'patient_hyp',
            },
        ),
        migrations.RunSQL(
            "ALTER TABLE patient_hyp DROP CONSTRAINT patient_hyp_pkey;"
        ),
        migrations.RunSQL(
            "SELECT create_hypertable('patient_hyp', 'time', chunk_time_interval => INTERVAL '1 day');"
        ),
    ]
