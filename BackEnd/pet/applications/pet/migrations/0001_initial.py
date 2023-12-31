# Generated by Django 4.2.2 on 2023-07-26 17:48

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='PetModel',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('img', models.ImageField(blank=True, null=True, upload_to='pet/', verbose_name='Avatar')),
                ('full_name', models.CharField(max_length=50, verbose_name='Name')),
                ('description', models.TextField()),
                ('breed', models.CharField(blank=True, max_length=50, verbose_name='Breed')),
                ('gender', models.CharField(blank=True, choices=[('Macho', 'Macho'), ('Hembra', 'Hembra')], max_length=10, null=True, verbose_name='Gender')),
                ('age', models.PositiveIntegerField(default=0)),
                ('weight', models.PositiveIntegerField(default=0)),
                ('nationality', models.CharField(blank=True, max_length=50, verbose_name='Nationality')),
                ('vaccination_record', models.ImageField(blank=True, null=True, upload_to='pet', verbose_name='Vaccination Record')),
                ('chip', models.BooleanField()),
                ('date_vaccine', models.CharField(blank=True, max_length=50, null=True, verbose_name='Last Vaccine')),
                ('last_vaccination', models.DateField(blank=True, null=True, verbose_name='Date last Vaccine')),
                ('date_vaccine1', models.CharField(blank=True, max_length=50, null=True, verbose_name='Next Vaccine')),
                ('next_vaccine', models.DateField(blank=True, null=True, verbose_name='Date Next Vaccine')),
                ('img_pet1', models.ImageField(default='pet/default.png', upload_to='pet/', verbose_name='Img 1')),
                ('img_pet2', models.ImageField(default='pet/default.png', upload_to='pet/', verbose_name='Img 2')),
                ('img_pet3', models.ImageField(default='pet/default.png', upload_to='pet/', verbose_name='Img 3')),
                ('img_pet4', models.ImageField(default='pet/default.png', upload_to='pet/', verbose_name='Img 4')),
                ('img_pet5', models.ImageField(default='pet/default.png', upload_to='pet/', verbose_name='Img 5')),
                ('peso', models.PositiveIntegerField(default=0)),
                ('likes', models.ManyToManyField(blank=True, related_name='mascotas_likes', to=settings.AUTH_USER_MODEL)),
                ('owner', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='mascotas', to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'verbose_name': 'Pet',
                'verbose_name_plural': 'Pets',
            },
        ),
    ]
