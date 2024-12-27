from django.shortcuts import render
from .models import Topic, Entry

# Create your views here.

def index(request):
    topics = Topic.objects.order_by('id')
    context = {"topics":topics}
    return render(request,'index.html',context)

def getTopic(request, topic_id):
    topic = Topic.objects.get(id=topic_id)
    entries = topic.entry_set.order_by('-id')
    context = {'topic':topic,'entries':entries}
    return render(request,"listagem.html",context)