# Django Rest
from rest_framework.generics import (
    ListAPIView, 
    CreateAPIView,
    RetrieveAPIView,
    DestroyAPIView,
    UpdateAPIView,
    RetrieveUpdateAPIView,
)
from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
# Django
from rest_framework.parsers import MultiPartParser, FormParser
from django.shortcuts import render
# Models
from .models import PetModel, User
# Serializers
from .serializers import (
    PetSerializers, 
    PetUpdateSerializers,
    PetCreateSerializers,
    PetLikeSerializers
    )
from rest_framework import generics, permissions

from .serializers import PetSerializers, PetCreateSerializers


class PetListApiView(ListAPIView):
    
    serializer_class = PetSerializers
    
    def get_queryset(self):

        return PetModel.objects.all()
    
    
class PetCreateApiView(CreateAPIView):

    serializer_class = PetCreateSerializers 
    queryset = PetModel.objects.all()
    parser_classes = [MultiPartParser, FormParser]
    
    
class MascotaViewSet(viewsets.ModelViewSet):
    
    serializer_class = PetCreateSerializers
    queryset = PetModel.objects.all()
    
    
class PetRetriApiView(RetrieveAPIView):
    
    serializer_class = PetCreateSerializers
    queryset = PetModel.objects.all()


class PetDestroyApiView(DestroyAPIView):
    
    serializer_class = PetCreateSerializers()
    queryset = PetModel.objects.all()
    
    
class PetUpdateApiView(RetrieveUpdateAPIView):
    
    serializer_class = PetUpdateSerializers
    queryset = PetModel.objects.all()


class PetLikeApiView(RetrieveUpdateAPIView):

    serializer_class = PetLikeSerializers
    queryset = PetModel.objects.all()
    
    @api_view(['POST'])
    @permission_classes([IsAuthenticated])
    def like_mascota(request, mascota_id):
        try:
            user = request.user
            mascota = PetModel.objects.get(id=mascota_id)

            if user in mascota.likes.all():
                mascota.likes.remove(user)
                message = f"No te gusta más la mascota {mascota.full_name}."
            else:
                mascota.likes.add(user)
                message = f"Te gusta la mascota {mascota.full_name}."

            return Response({"message": message})
        except PetModel.DoesNotExist:
            return Response(status=404)
    