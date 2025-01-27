from django.shortcuts import render
import datetime

# Create your views here.

def index(request):

    data = {}
    data['transacoes'] = ['t1','t2','t3']
    data['now'] = datetime.datetime.now()
    return render(request,'index.html',data)