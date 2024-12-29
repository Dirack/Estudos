from django.db import models

# Create your models here.

class Topic(models.Model):
    text = models.CharField('text',max_length=200)

    def __str__(self):
        return self.text

class Entry(models.Model):
    topic = models.ForeignKey(Topic,on_delete=models.CASCADE,db_constraint=False)
    text = models.TextField('text',max_length=500)

    class Meta:
        verbose_name_plural = 'entries'
    
    def __str__(self):
        return '[%s] => %s' % (self.topic,self.text)

class Aluno(models.Model):
    nome = models.CharField('nome',max_length=200)

    def __str__(self):
        return '%s' % (self.nome)