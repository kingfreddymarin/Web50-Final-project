# Generated by Django 4.1.2 on 2022-12-13 16:19

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0006_remove_post_comments_remove_post_dislikes_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='post',
            name='title',
            field=models.CharField(default='', max_length=50),
        ),
    ]
