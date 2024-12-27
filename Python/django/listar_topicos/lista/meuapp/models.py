from django.db import models

# Create your models here.

class Topic(models.Model):
    text = models.CharField('topic',max_length=200)

    def __str__(self) -> str:
        return self.text

class Entry(models.Model):
    topic = models.ForeignKey(Topic,on_delete=models.CASCADE)
    entry = models.CharField('entry',max_length=200)

    def __str__(self) -> str:
        return self.entry+' ['+self.topic.text+']'
    
    class Meta:
        verbose_name_plural = 'entries'