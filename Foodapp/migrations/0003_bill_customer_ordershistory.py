# Generated by Django 4.0 on 2022-01-31 07:02

from django.db import migrations, models

class Migration(migrations.Migration):

    dependencies = [
        ('Foodapp', '0002_auto_20220128_1301'),
    ]

    operations = [
        migrations.CreateModel(
            name='Bill',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('customer_name', models.CharField(max_length=30)),
                ('price', models.FloatField()),
                ('date', models.DateField()),
                ('item_name', models.CharField(max_length=30)),
                ('quantity', models.IntegerField()),
            ],
        ),
        migrations.CreateModel(
            name='Customer',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('customer_name', models.CharField(max_length=30)),
                ('phone_no', models.CharField(max_length=10)),
            ],
        ),
migrations.CreateModel(
            name='OrdersHistory',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('price', models.FloatField()),
                ('item_name', models.CharField(max_length=50)),
                ('quantity', models.IntegerField()),
            ],
        ),
    ]

