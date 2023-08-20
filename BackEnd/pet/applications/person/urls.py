from django.urls import path,include
from .views import MyTokenObtainPairView,RegistrationView,profile_get,profile_update

from rest_framework_simplejwt.views import (
    TokenRefreshView,
)


urlpatterns = [
    path('v1/token/', MyTokenObtainPairView.as_view()),
    path('v1/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('v1/accounts/register', RegistrationView.as_view(), name='register'),
    path('v1/profile', profile_get,name='Profile Get' ),
    path('v1/profile/update', profile_update,name='Profile Update' ),

]
