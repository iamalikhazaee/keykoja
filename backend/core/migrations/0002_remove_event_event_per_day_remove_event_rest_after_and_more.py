# Generated by Django 4.2.1 on 2023-05-15 00:51

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='event',
            name='event_per_day',
        ),
        migrations.RemoveField(
            model_name='event',
            name='rest_after',
        ),
        migrations.RemoveField(
            model_name='event',
            name='rest_before',
        ),
    ]
