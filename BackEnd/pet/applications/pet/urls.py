from django.contrib import admin
from django.urls import path, include
from django.conf.urls.static import static
from django.conf import settings
# Views
from . import views

app_name = 'pet_app'

urlpatterns = [
    path(
        'api/list/',
        views.PetListApiView.as_view(),
    ),
    path(
        'api/create/',
        views.PetCreateApiView.as_view(),
    ),
    path(
        'api/detail/<pk>/',
        views.PetRetriApiView.as_view(),
    ),
    path(
        'api/delete/<pk>/',
        views.PetDestroyApiView.as_view(),
    ),
    path(
        'api/update/<pk>/',
        views.PetUpdateApiView.as_view(),
    ),
    path(
        'api/like/<pk>/',
        views.PetLikeApiView.as_view(),
    ),


]
                                                                                                                            