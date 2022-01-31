from dataclasses import fields
from rest_framework import serializers
from .models import Bill, Category, Customer, Item, OrdersHistory

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ('category_id','category_name')

class ItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = Item
        fields = ('item_no','item_name','image','price','category_id')

class OrderHistorySerializer(serializers.ModelSerializer):
    class Meta:
        model = OrdersHistory
        fields = ('id','price','date','item_name','quantity')

class BillSerializer(serializers.ModelSerializer):
    class Meta:
        model = Bill
        fields = ('customer_name','price','date','item_name','quantity')

class CustomerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Customer
        fields = ('customer_id','customer_name','phone_no')
    