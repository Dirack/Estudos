# Generated by Django 4.2.17 on 2024-12-29 17:53

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('meuapp', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='entry',
            name='topic',
            field=models.ForeignKey(db_constraint=False, on_delete=django.db.models.deletion.CASCADE, to='meuapp.topic'),
        ),
    ]