from django.db import models

# Create your models here.

class Topic(models.Model):
    """Um assunto aleatório"""
    text = models.CharField(max_length=200)
    date_added = models.DateTimeField(auto_now=True)

    def __str__(self):
        """Devolve uma string"""
        return self.text