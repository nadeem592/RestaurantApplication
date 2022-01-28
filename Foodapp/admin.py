from django.contrib import admin
from .models import Category,Item
from import_export.admin import ImportExportModelAdmin


@admin.register(Item)
class ItemAdmin(ImportExportModelAdmin):
    pass
@admin.register(Category)
class CategoryAdmin(ImportExportModelAdmin):
    pass