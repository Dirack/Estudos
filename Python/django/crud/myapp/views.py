from django.shortcuts import render
from .models import Transacao
from .form import TransacaoForm

# Create your views here.

def index(request):
    data = {}
    data['transacoes'] = Transacao.objects.all()
    return render(request,'index.html',data)

def nova_transacao(request):

    data = {}
    form = TransacaoForm(request.POST or None)

    if form.is_valid():
        form.save()
        return index(request)

    data['form'] = form

    return render(request,'form.html',data)