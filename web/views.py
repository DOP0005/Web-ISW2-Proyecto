from django.shortcuts import render, redirect
from .models import Usuario, Cita, HistoriaClinica
from .forms import usuarioForms, citaForms, historiaClinicaForms, CustomUserCreationForm
from django.contrib.auth import authenticate, login


# Create your views here.
def index(request):
    return render(request, 'index.html')

def login(request, user):
    return render(request, 'login.html')



#CRUD Cita****************************************************  

def crear_cita(request):
    formulario = citaForms(request.POST or None)
    if formulario.is_valid():
        formulario.save()
        return redirect('citas')
    return render(request, 'crear_cita.html', {'formulario': formulario})

def citas(request):
    citas = Cita.objects.all()
    return render(request, 'listar_citas.html', {'citas': citas})

def editar_cita(request, cita):
    cita= Cita.objects.get(cita=cita)
    formulario = citaForms(request.POST or None, instance=cita)
    if formulario.is_valid() and request.POST:
        formulario.save()
        return redirect('citas')
    return render(request, 'editar_cita.html', {'formulario':formulario})
    
def eliminar_cita(request, cita):
    cita = Cita.objects.get(cita=cita)
    cita.delete()
    return redirect('citas')


#CRUD USUARIO********************************************************************************************************************************


def crear_usuario(request):
    formulario = usuarioForms(request.POST or None)
    if formulario.is_valid():
        formulario.save()
        return redirect('usuarios')
    return render(request, 'crear_usuario.html', {'formulario': formulario})

def usuarios(request):
    usuarios = Usuario.objects.all()
    return render(request, 'listar_usuarios.html', {'usuarios': usuarios})

def editar_usuario(request, usuario):
    usuario= Usuario.objects.get(usuario=usuario)
    formulario = usuarioForms(request.POST or None, instance=usuario)
    if formulario.is_valid() and request.POST:
        formulario.save()
        return redirect('usuarios')
    return render(request, 'editar_usuario.html', {'formulario':formulario})
    
def eliminar_usuario(request, usuario):
    usuario = Usuario.objects.get(usuario=usuario)
    usuario.delete()
    return redirect('usuarios')


#CRUD HISTORIA CLINICA********************************************************************************************************************************

def crear_historiaClinica(request):
    formulario = historiaClinicaForms(request.POST or None)
    if formulario.is_valid():
        formulario.save()
        return redirect('historiaClinicas')
    return render(request, 'crear_historiaClinica.html', {'formulario': formulario})

def historiaClinicas(request):
    historiaClinicas = HistoriaClinica.objects.all()
    return render(request, 'listar_historiaClinicas.html', {'historiaClinicas': historiaClinicas})

def editar_historiaClinica(request, historiaClinica):
    historiaClinica= HistoriaClinica.objects.get(historiaClinica=historiaClinica)
    formulario = historiaClinicaForms(request.POST or None, instance=historiaClinica)
    if formulario.is_valid() and request.POST:
        formulario.save()
        return redirect('historiaClinicas')
    return render(request, 'editar_historiaClinica.html', {'formulario':formulario})
    
def eliminar_historiaClinica(request, historiaClinica):
    historiaClinica = HistoriaClinica.objects.get(historiaClinica=historiaClinica)
    historiaClinica.delete()
    return redirect('historiaClinicas')


# ************************************************************************************  

def registro(request):
    data = {
        'form': CustomUserCreationForm()
    }

    if request.method == 'POST':
        formulario = CustomUserCreationForm(data=request.POST)
        if formulario.is_valid():
            formulario.save()
            user = authenticate(username=formulario.cleaned_data["username"], password= formulario.cleaned_data["password1"])
            login(request, user)
            # messages.success(request,"Registrado correcto")
            return redirect('index')
        data["form"] = formulario


    return render(request, 'registration/registro.html', data)