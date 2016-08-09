# -*- coding: utf-8 -*-
# Generated by Django 1.9.7 on 2016-08-09 17:48
from __future__ import unicode_literals

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Upload',
            fields=[
                ('id', models.AutoField(
                    auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('date_created', models.DateTimeField(auto_now_add=True)),
                ('file', models.FileField(
                    blank=True, default='', upload_to=b'')),
                ('owner', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE,
                                            related_name='upload_owner', to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'permissions': (('view_upload', 'Can view upload'),),
            },
        ),
    ]
