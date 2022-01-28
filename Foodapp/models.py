from pyexpat import model
from statistics import mode
from unicodedata import category
from django.db import models
from django.forms import CharField, DateField

# Create your models here.
class Category(models.Model):
    category_id=models.IntegerField()
    category_name=models.CharField(max_length=30)

class Item(models.Model):
    item_no=models.IntegerField()
    item_name=models.CharField(max_length=30)
    image=models.CharField(max_length=30)
    price=models.FloatField()
    category_id=models.IntegerField()

class OrdersHistory(models.Model):
    price = models.FloatField()
    date = DateField()
    item_name = models.CharField(max_length=50)
    quantity = models.IntegerField()

class Bill(models.Model):
    customer_name = models.CharField(max_length=30)
    price = models.FloatField()
    date = models.DateField()
    item_name=models.CharField(max_length=30)
    quantity = models.IntegerField()