from django.shortcuts import render,redirect
from django.http import HttpResponse
from itsdangerous import Serializer
from .models import Item,Category, OrderHistory, Bill,Customer
from .serializers import ItemSerializer,CategorySerializer,OrderHistorySerializer,BillSerializer,CustomerSerializer
from rest_framework import viewsets                       

class Category(viewsets.ModelViewSet):  
    serializer_class = CategorySerializer  
    queryset = Category.objects.all()  

class Item(viewsets.ModelViewSet):  
    serializer_class = ItemSerializer   
    queryset = Item.objects.all() 

class OrderHistory(viewsets.ModelViewSet):
    serializer_class = OrderHistorySerializer
    queryset = OrderHistory.objects.all()

class Bill(viewsets.ModelViewSet):
    serializer_class = BillSerializer
    queryset = Bill.objects.all()

class Customer(viewsets.ModelViewSet):
    serializer_class = CustomerSerializer
    queryset = Customer.objects.all()
