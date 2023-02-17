from django.db import models
from core.models import PlocketUser


class Add(models.Model):
    user = models.ForeignKey(PlocketUser, on_delete=models.CASCADE)
    title = models.CharField(max_length=50)
    price = models.IntegerField()
    description = models.TextField(max_length=500)

    def __str__(self):
        return f'{self.title}'
