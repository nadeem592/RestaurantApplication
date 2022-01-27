from django.contrib import admin
from .models import ItemModel
from import_export.admin import ImportExportModelAdmin


@admin.register(ItemModel)
class ItemAdmin(ImportExportModelAdmin):
    pass