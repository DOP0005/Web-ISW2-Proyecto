# Generated by Django 4.2.1 on 2023-05-17 05:12

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('web', '0008_alter_usuario_usuario'),
    ]

    operations = [
        migrations.AlterField(
            model_name='cita',
            name='cita',
            field=models.AutoField(max_length=20, primary_key=True, serialize=False, verbose_name='Cita'),
        ),
        migrations.AlterField(
            model_name='usuario',
            name='usuario',
            field=models.CharField(max_length=20, primary_key=True, serialize=False, verbose_name='Usuario'),
        ),
    ]