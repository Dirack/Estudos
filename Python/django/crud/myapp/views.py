from django.shortcuts import render
from .models import Transacao

# Create your views here.

def index(request):
    data = {}
    data['transacoes'] = Transacao.objects.all()
    return render(request,'index.html',data)