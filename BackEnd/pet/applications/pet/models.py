from django.conf import settings
from django.db import models

from django.contrib.auth.models import User
from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.

class PetModel(models.Model):
    """Model definition for Pet."""
    
    gender_options= (
        ('Macho','Macho'),
        ('Hembra','Hembra'),
    )    
    img = models.ImageField(
        'Avatar', 
        upload_to='pet/', 
        blank= True,
        null=True,
    )
    full_name = models.CharField(
        'Name', 
        max_length=50
    )
    description = models.TextField()
    breed = models.CharField(
        'Breed', 
        max_length=50,
        blank= True,
    )
    gender= models.CharField(
        'Gender', 
        max_length=10,
        choices= gender_options,
        blank= True,
        null=True,
    )
    age = models.PositiveIntegerField(
        default=0,
    )
    weight = models.PositiveIntegerField(
        default=0,
    )
    nationality = models.CharField(
        'Nationality', 
        max_length=50,
        blank= True,
    )
    vaccination_record = models.ImageField(
        'Vaccination Record', 
        upload_to='pet', 
        blank= True,
        null=True,
    )
    chip = models.BooleanField()
    date_vaccine = models.CharField(
        'Last Vaccine', 
        max_length=50,
        blank= True,
        null=True,
    )
    last_vaccination = models.DateField(
        'Date last Vaccine', 
        auto_now=False, 
        auto_now_add=False,
        blank= True,
        null=True,
    )
    date_vaccine1 = models.CharField(
        'Next Vaccine', 
        max_length=50,
        blank= True,
        null=True,
    )
    next_vaccine = models.DateField(
        'Date Next Vaccine', 
        auto_now=False, 
        auto_now_add=False,
        blank= True,
        null=True,
    )
    owner = models.ForeignKey(
        User, 
        on_delete=models.CASCADE,
        related_name='mascotas',
    )
    img_pet1 = models.ImageField(
        'Img 1', 
        upload_to='pet/',
        default='pet/default.png'
    )
    img_pet2 = models.ImageField(
        'Img 2', 
        upload_to='pet/',
        default='pet/default.png'
    )
    img_pet3 = models.ImageField(
        'Img 3', 
        upload_to='pet/',
        default='pet/default.png'
    )
    img_pet4 = models.ImageField(
        'Img 4', 
        upload_to='pet/',
        default='pet/default.png'
    )
    img_pet5 = models.ImageField(
        'Img 5', 
        upload_to='pet/',
        default='pet/default.png'
    )
    peso = models.PositiveIntegerField(
        default=0,
    )
    class Meta:
        """Meta definition for Pet."""

        verbose_name = 'Pet'
        verbose_name_plural = 'Pets'
        
    likes = models.ManyToManyField(
        User,
        related_name='mascotas_likes', 
        blank=True
        )


    def __str__(self):
        """Unicode representation of Pet."""
        return self.full_name 
