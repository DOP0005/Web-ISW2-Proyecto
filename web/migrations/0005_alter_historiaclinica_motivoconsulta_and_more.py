# Generated by Django 4.2.1 on 2023-05-17 03:58

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('web', '0004_alter_cita_cita_alter_cita_fecha_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='historiaclinica',
            name='motivoConsulta',
            field=models.TextField(verbose_name='Motivo de Consulta'),
        ),
        migrations.AlterField(
            model_name='historiaclinica',
            name='nombreHC',
            field=models.CharField(max_length=100, verbose_name='Nombre Historia Clinica'),
        ),
    ]