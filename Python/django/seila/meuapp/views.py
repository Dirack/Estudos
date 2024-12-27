from django.shortcuts import render
from .models import Aluno
import datetime
from django.http import HttpResponse

# Create your views here.

def index(request):
    return render(request,'index.html')

def listagem(request):
    alunos = Aluno.objects.all()
    context = {"alunos": alunos}
    return render(request,'listagem.html',context)

def hora(request):
    now = datetime.datetime.now()
    context = {"now":now}
    return render(request,'hora.html',context)