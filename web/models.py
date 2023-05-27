from django.db import models
from django.contrib.auth.models import User


# Create your models here.

class Usuario(models.Model):
    usuario= models.AutoField(primary_key=True, verbose_name='Usuario')
    nombre = models.CharField(max_length= 100, verbose_name='Nombre')
    apellidos = models.CharField(max_length=100, verbose_name='Apellidos')
    correo = models.EmailField(unique=True, verbose_name='Correo' )
    contrasena = models.CharField(max_length=250, verbose_name='Contraseña')
    telefono = models.IntegerField(max_length= 8, verbose_name='Telefono')

    def __str__(self):
        return f"{self.nombre}"


class Cita(models.Model):
    cita = models.AutoField(primary_key=True, verbose_name='Cita' )
    fecha = models.DateField(verbose_name='Fecha')
    usuario = models.ForeignKey(Usuario, on_delete=models.CASCADE)

    def __str__(self):
        return f"Cita {self.cita} - {self.fecha}"


class HistoriaClinica(models.Model):
    
    historiaClinica = models.AutoField(primary_key=True)
    nombreHC = models.TextField(max_length=100, verbose_name='Nombre Historia Clinica')
    Direccion = models.TextField(max_length=100, verbose_name='Dirección')
    motivoConsulta = models.TextField(verbose_name='Motivo de Consulta')
    usuario = models.ForeignKey(Usuario, on_delete=models.CASCADE)
    def __str__(self):
        return f"HistoriaClinica {self.historiaClinica} - {self.nombreHC}"

# class userProfile(models.Model):
#     #campos
#     user=models.OneToOneField(User,verbose_name='User',on_delete=models.CASCADE)
#     ci = models.IntegerField(verbose_name='Carnet de Identidad')
#     cargo=models.CharField(max_length=50,verbose_name='Cargo', choices=(('Secretario Docente','Secretario Docente'),('Secretario de Recursos Humanos','Secretario de Recursos Humanos'),('Secretario General','Secretario General')))

#     def __str__(self):
#         return str(self.user.username)