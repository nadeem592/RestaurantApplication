# Generated by Django 4.0 on 2022-01-31 07:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Foodapp', '0003_bill_customer_ordershistory'),
    ]

    operations = [
        migrations.CreateModel(
            name='OrderHistory',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('price', models.FloatField()),
                ('date', models.DateField()),
                ('item_name', models.CharField(max_length=50)),
                ('quantity', models.IntegerField()),
            ],
        ),
        migrations.DeleteModel(
            name='OrdersHistory',
        ),
    ]