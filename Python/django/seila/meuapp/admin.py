from django.contrib import admin
from .models import Aluno, Topic, Entry

# Register your models here.

admin.site.register(Aluno)
admin.site.register(Topic)
admin.site.register(Entry)