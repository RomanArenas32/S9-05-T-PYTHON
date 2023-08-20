from rest_framework import serializers
from .models import PetModel, User
from applications.person.serializer import RegistrationSerializer


class PetSerializers(serializers.ModelSerializer):
    
    class Meta:
        model = PetModel
        fields =(
            'id',
            'img',
            'full_name',
            'breed',
            'gender',
            'description',
            'likes',
        )


class PetCreateSerializers(serializers.ModelSerializer): 

    owner = RegistrationSerializer()

    class Meta:
        model = PetModel
        fields = '__all__'
   
        
class PetCreateSerializers(serializers.ModelSerializer): 

    class Meta:
        model = PetModel
        fields = '__all__'
        

class PetUpdateSerializers(serializers.ModelSerializer): 


    class Meta:
        model = PetModel
        fields =(
            'id',
            'img',
            'full_name',
            'description',
            'breed',
            'description',
            'gender',
            'age',
            'nationality',
            'vaccination_record',
            'chip',
            'date_vaccine',
            'last_vaccination',
            'date_vaccine1',
            'next_vaccine',
            'img_pet1',
            'img_pet2',
            'img_pet3',
            'img_pet4',
            'img_pet5',
            'likes',
            'peso',
        )
        

class PetLikeSerializers(serializers.ModelSerializer): 


    class Meta:
        model = PetModel
        fields =(
            'likes',
        )