# Generated by Django 4.0.5 on 2022-07-19 16:19

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='UserPlant',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('plant_image', models.CharField(blank=True, default=None, max_length=200)),
                ('matched_plant', models.ForeignKey(blank=True, default=None, on_delete=django.db.models.deletion.CASCADE, related_name='matched_plant', to='api.plant')),
                ('user', models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
                ('user_plant', models.ForeignKey(blank=True, default=None, on_delete=django.db.models.deletion.CASCADE, related_name='user_plant', to='api.plant')),
            ],
        ),
    ]