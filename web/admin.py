from django.contrib import admin
from .models import Usuario, Cita, HistoriaClinica
# Register your models here.

admin.site.register(Usuario)
admin.site.register(Cita)
admin.site.register(HistoriaClinica)

