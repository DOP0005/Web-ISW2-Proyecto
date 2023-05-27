from django.urls import path
from . import views
from django.conf import settings
from django.contrib.staticfiles.urls import static


urlpatterns = [
    path('', views.index, name='index'),
    path('login/' , views.login, name='login'),
   
#CRUD Cita****************************************************
    path('crear_cita/', views.crear_cita, name='crear_cita'),
    path('citas/', views.citas, name='citas'),
    path('eliminar_cita/<int:cita>', views.eliminar_cita, name='eliminar_cita'),
    path('editar_cita/<int:cita>', views.editar_cita, name='editar_cita'),
    
#CRUD usuario************************************************
    path('crear_usuario/', views.crear_usuario, name='crear_usuario'),
    path('usuarios/', views.usuarios, name='usuarios'),
    path('eliminar_usuario/<int:usuario>', views.eliminar_usuario, name='eliminar_usuario'),
    path('editar_usuario/<int:usuario>', views.editar_usuario, name='editar_usuario'),

#CRUD HISTORIA CLINICA************************************************
    path('crear_historiaClinica/', views.crear_historiaClinica, name='crear_historiaClinica'),
    path('historiaClinicas/', views.historiaClinicas, name='historiaClinicas'),
    path('eliminar_historiaClinica/<int:historiaClinica>', views.eliminar_historiaClinica, name='eliminar_historiaClinica'),
    path('editar_historiaClinica/<int:historiaClinica>', views.editar_historiaClinica, name='editar_historiaClinica'),

#***************************************************************
    path('registro/', views.registro, name='registro'),
    

    
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)