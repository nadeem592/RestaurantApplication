# Generated by Django 4.0 on 2022-02-02 06:01

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('Foodapp', '0005_merge_20220202_1126'),
    ]

    operations = [
        migrations.AlterModelTable(
            name='bill',
            table='Bill',
        ),
        migrations.AlterModelTable(
            name='category',
            table='Category',
        ),
        migrations.AlterModelTable(
            name='customer',
            table='Customer',
        ),
        migrations.AlterModelTable(
            name='item',
            table='Item',
        ),
        migrations.AlterModelTable(
            name='orderhistory',
            table='OrderHistory',
        ),
    ]
