from django.shortcuts import render

# Create your views here.

def index(request):
    return render(request,'index.html')

def minharota(request):
    return render(request, 'minharota.html')