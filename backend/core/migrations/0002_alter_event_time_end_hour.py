# Generated by Django 4.2.1 on 2023-06-01 00:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='event_time',
            name='end_hour',
            field=models.TimeField(null=True),
        ),
    ]
