from django.shortcuts import render, redirect
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

def update(request,transacao_id):

    data = {}
    transacao = Transacao.objects.get(id=transacao_id)
    form = TransacaoForm(request.POST or None, instance=transacao)

    if form.is_valid():
        form.save()
        return redirect('index')
    
    data['form'] = form
    return render(request,'form.html',data)