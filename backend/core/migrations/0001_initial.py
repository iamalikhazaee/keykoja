# Generated by Django 4.2.1 on 2023-05-14 22:14

import datetime
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Event',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('type', models.CharField(choices=[('یک به یک', 'یک به یک'), ('گروهی', 'گروهی')], max_length=50)),
                ('time_unit', models.DecimalField(decimal_places=1, default=1.5, max_digits=5)),
                ('place', models.CharField(choices=[('حضوری', 'حضوری'), ('Google meet', 'Google meet'), ('Skype', 'Skype'), ('Whatsapp', 'Whatsapp')], max_length=50)),
                ('address', models.CharField(blank=True, default=' ', max_length=255)),
                ('massage', models.TextField(blank=True)),
                ('event_domain', models.CharField(max_length=255)),
                ('event_per_day', models.IntegerField(default=5)),
                ('rest_before', models.TimeField()),
                ('rest_after', models.TimeField()),
            ],
            options={
                'verbose_name': 'Event',
                'verbose_name_plural': 'Events',
                'db_table': '',
                'managed': True,
            },
        ),
        migrations.CreateModel(
            name='Event_time',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('start_hour', models.DateTimeField()),
                ('duration', models.DurationField(default=datetime.timedelta(seconds=5400))),
                ('end_hour', models.DateTimeField(blank=True, null=True)),
                ('is_enable', models.BooleanField(default=True)),
                ('event', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='core.event')),
            ],
        ),
        migrations.CreateModel(
            name='Profile',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('email', models.EmailField(max_length=254)),
                ('password', models.CharField(max_length=255)),
                ('first_name', models.CharField(max_length=255)),
                ('last_name', models.CharField(max_length=255)),
                ('domain', models.CharField(max_length=50)),
            ],
            options={
                'verbose_name': 'Profile',
                'verbose_name_plural': 'Profiles',
                'db_table': '',
                'managed': True,
            },
        ),
        migrations.CreateModel(
            name='Guest',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
                ('email', models.EmailField(max_length=254)),
                ('approve', models.BooleanField(default=False)),
                ('event', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='core.event')),
                ('time', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to='core.event_time')),
            ],
            options={
                'verbose_name': 'Guest',
                'verbose_name_plural': 'Guests',
                'db_table': '',
                'managed': True,
            },
        ),
        migrations.AddField(
            model_name='event_time',
            name='profile',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='core.profile'),
        ),
        migrations.AddField(
            model_name='event',
            name='owner',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='core.profile'),
        ),
        migrations.CreateModel(
            name='Availability',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('day_of_week', models.CharField(choices=[('Monday', 'Monday'), ('Tuesday', 'Tuesday'), ('Wednesday', 'Wednesday'), ('Thursday', 'Thursday'), ('Friday', 'Friday'), ('Saturday', 'Saturday'), ('Sunday', 'Sunday')], max_length=255)),
                ('start_time', models.TimeField()),
                ('end_time', models.TimeField()),
                ('profile', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='core.profile')),
            ],
            options={
                'verbose_name': 'Availability',
                'verbose_name_plural': 'Availabilities',
                'db_table': '',
                'managed': True,
            },
        ),
    ]