from django.db import models

# Create your models here.
class ItemModel(models.Model):
    title=models.CharField(max_length=30)
    image=models.ImageField(upload_to="images/")
    description=models.TextField()
    price=models.FloatField()
    category=models.CharField(max_length=30)