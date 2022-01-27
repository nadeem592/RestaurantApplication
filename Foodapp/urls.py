from django.contrib import admin
from django.urls import path,include
from Foodapp.views import ItemView
from django.conf.urls.static import static
from django.conf import  settings
from rest_framework import routers                             

router = routers.DefaultRouter()                   
                 
router.register('', ItemView, 'Foodapp') 
# from mysite.firstProject.views import json1

urlpatterns = [
    path('admin/', admin.site.urls),
    
    
    path('', include(router.urls)),
    # path("json/",json,name='json')

]