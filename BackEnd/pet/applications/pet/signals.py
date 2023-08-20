from django.db.models.signals import post_save
from django.dispatch import receiver
from django.contrib.auth import get_user_model
from .models import PetModel

@receiver(post_save, sender=PetModel)
def asignar_propietario(sender, instance, created, **kwargs):
    if created:
        User = get_user_model()
        usuario = User.objects.get(id=instance.owner_id)
        instance.owner = usuario
        instance.save()
