from django.db import models

# Create your models here.

class Aluno(models.Model):
    nome = models.CharField('nome',max_length=200)

    def __str__(self):
        return self.nome