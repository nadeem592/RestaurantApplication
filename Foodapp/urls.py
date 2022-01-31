from django.contrib import admin
from django.urls import path,include
from Foodapp.views import Item,Category,Bill, Customer, OrderHistory
from django.conf.urls.static import static
from django.conf import  settings
from rest_framework import routers                             

router = routers.DefaultRouter()                                    
router.register(r'items', Item) 
router.register(r'category', Category) 
router.register(r'orderhistory', OrderHistory)
router.register(r'bill', Bill)
router.register(r'customer', Customer)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
    # path("json/",json,name='json')

]
