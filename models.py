from unicodedata import category
from django.db import models
from django.forms import CharField

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

class Customer(models.Model):
    customer_id=models.IntegerField
    customer_name=models.CharField(max_length=30)
    phone_no=models.CharField(max_length=10)