from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('topic/<topic_id>/',views.getTopic, name='gettopic')
]
