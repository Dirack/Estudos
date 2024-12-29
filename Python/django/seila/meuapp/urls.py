from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('listagem/',views.listagem, name='listagem'),
    path('hora/',views.hora, name='hora'),
    path('exemplo/get/',views.get, name='get'),
]
