from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("patient", "0001_initial"),
    ]

    operations = [
        migrations.RunSQL(
            "ALTER TABLE patient_hyp SET (timescaledb.compress, timescaledb.compress_segmentby = 'id');"
        ),
        migrations.RunSQL(
            "SELECT add_compression_policy('patient_hyp', INTERVAL '1 day')"
        ),
    ]