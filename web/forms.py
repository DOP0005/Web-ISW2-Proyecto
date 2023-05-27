from django import forms
from .models import Usuario, Cita, HistoriaClinica
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User


class usuarioForms(forms.ModelForm):
    class Meta:
        model= Usuario
        fields = '__all__'

class citaForms(forms.ModelForm):
    class Meta:
        model= Cita
        fields = '__all__'
        widgets = {
            "fecha": forms.SelectDateWidget()
        }
        
class historiaClinicaForms(forms.ModelForm):
    class Meta:
        model= HistoriaClinica
        fields = '__all__'


class CustomUserCreationForm(UserCreationForm):
    class Meta:
        model = User
        fields = ['username', 'email', 'password1', 'password2']