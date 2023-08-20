from django.db import models
from django.contrib.auth.models import User
from  django.db.models.signals import post_save
from django.dispatch import receiver


class Profile(models.Model):
    user = models.ForeignKey(User,on_delete=models.CASCADE)
    nationality = models.CharField(max_length=255,blank=True,null=True)
    age = models.IntegerField(blank=True,null=True)
    phone = models.IntegerField(blank=True,null=True)
    
    def __str__(self):
        return f'Perfil de {self.user.username}'
    
@receiver(post_save,sender=User)
def user_created(sender,instance,created,**kwargs):
    Profile.objects.create(user=instance)