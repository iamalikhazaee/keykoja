# Generated by Django 4.1 on 2023-04-20 13:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0002_alter_availability_type_unit_and_more'),
    ]

    operations = [
        migrations.AlterUniqueTogether(
            name='availability',
            unique_together=set(),
        ),
        migrations.AlterField(
            model_name='availability',
            name='type_unit',
            field=models.CharField(choices=[('hour', 'hour'), ('minute', 'minute')], default='hour', max_length=10),
        ),
    ]
