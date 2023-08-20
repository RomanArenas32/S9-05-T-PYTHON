from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework import viewsets
from django.contrib.auth.models import User
from rest_framework import status
from rest_framework.response import  Response
from rest_framework.views import APIView
from .serializer import RegistrationSerializer,ProfileSerializer
from .models import Profile 
from rest_framework.decorators import permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import api_view

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        # Add custom claims
        token['username'] = user.username
        # ...

        return token


class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer
    

    
    
class RegistrationView(APIView):
    def post(self, request):
        serializer = RegistrationSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def profile_get(request, *args, **kwargs):
    user = request.user
    profile = Profile.objects.get(user=user)
    serializer = ProfileSerializer(profile)
    
    return Response(serializer)

@api_view(['UPDATE'])
@permission_classes([IsAuthenticated])
def profile_update(request, *args, **kwargs):
    user = request.user
    profile = Profile.objects.get(user=user)
    data = request.data 
    
    profile.nationality = data.nationality if data.nationality else None
    profile.age = data.age if data.age else None
    profile.phone = data.phone if data.phone else None

    return Response("Perfil Updated",status=200)

