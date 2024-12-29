from django.shortcuts import render
from .models import Aluno, Topic, Entry
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

def get(request):
   
    aluno = Aluno.objects.get(pk='1')
    alunos_filtrados = Aluno.objects.filter(nome='Ciclano').values()
    aluno_da_excusao = Aluno.objects.exclude(id=1).values()
    html = '''
    <ul>
        <li>primeiro: %s</li>
        <li>Aluno filtrado por nome: %s</li>
        <li>Alunos filtrados por exclusão: %s</li>
    </ul>
    ''' % (str(aluno),
           [aluno for aluno in alunos_filtrados],
           [aluno for aluno in aluno_da_excusao])
    
    topic = Topic.objects.get(id=1)
    entry = Entry.objects.filter(text__startswith='nola').values()
    html += '''
    <h1>Obter tópico filtrando com LIKE</h1>
    <h3>%s</h3>
    <p>%s</p>
    ''' % (topic,[e for e in entry])

    topic = Topic.objects.get(id=1)
    entry = Entry.objects.filter(text__endswith='es').values()
    html += '''
    <h1>Obter tópico filtrando com LIKE</h1>
    <h3>%s</h3>
    <p>%s</p>
    ''' % (topic,[e for e in entry])
    return HttpResponse(html)