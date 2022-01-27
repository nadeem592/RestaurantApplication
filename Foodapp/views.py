from django.shortcuts import render,redirect
from django.http import HttpResponse
from .models import ItemModel
from .serializers import ItemSerializer
from rest_framework import viewsets                       

class ItemView(viewsets.ModelViewSet):  
    serializer_class = ItemSerializer   
    queryset = ItemModel.objects.all()  