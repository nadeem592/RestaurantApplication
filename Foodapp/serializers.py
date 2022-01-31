from rest_framework import serializers
from .models import Category, Item

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ('category_id','category_name')

class ItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = Item
        fields = ('item_no','item_name','image','price','category_id')

