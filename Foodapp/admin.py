from django.contrib import admin
from .models import Bill, Category, Customer,Item, OrdersHistory
from import_export.admin import ImportExportModelAdmin


@admin.register(Item)
class ItemAdmin(ImportExportModelAdmin):
    pass
@admin.register(Category)
class CategoryAdmin(ImportExportModelAdmin):
    pass
@admin.register(OrdersHistory)
class OrdersHistoryAdmin(ImportExportModelAdmin):
    pass
@admin.register(Bill)
class BillAdmin(ImportExportModelAdmin):
    pass
@admin.register(Customer)
class CustomerAdmin(ImportExportModelAdmin):
    pass

