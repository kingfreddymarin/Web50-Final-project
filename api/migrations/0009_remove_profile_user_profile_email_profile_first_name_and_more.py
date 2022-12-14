# Generated by Django 4.1.2 on 2022-12-14 00:02

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0008_profile_isteacher'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='profile',
            name='user',
        ),
        migrations.AddField(
            model_name='profile',
            name='email',
            field=models.EmailField(blank=True, max_length=254, verbose_name='email_address'),
        ),
        migrations.AddField(
            model_name='profile',
            name='first_name',
            field=models.CharField(blank=True, max_length=150, verbose_name='first_name'),
        ),
        migrations.AddField(
            model_name='profile',
            name='last_name',
            field=models.CharField(blank=True, max_length=150, verbose_name='last_name'),
        ),
        migrations.AddField(
            model_name='profile',
            name='password',
            field=models.CharField(default='Noeulloa_2912', max_length=128, verbose_name='password'),
        ),
    ]
