# Generated by Django 4.1.2 on 2022-12-13 02:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_alter_category_followers'),
    ]

    operations = [
        migrations.AddField(
            model_name='post',
            name='categories',
            field=models.ManyToManyField(blank=True, null=True, related_name='postCategories', to='api.category'),
        ),
    ]
