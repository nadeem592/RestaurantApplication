from django.shortcuts import render,redirect
from django.http import HttpResponse
from .models import Item,Category
from .serializers import ItemSerializer,CategorySerializer
from rest_framework import viewsets                       

class Category(viewsets.ModelViewSet):  
    serializer_class = CategorySerializer  
    queryset = Category.objects.all()  

class Item(viewsets.ModelViewSet):  
    serializer_class = ItemSerializer   
    queryset = Item.objects.all() 