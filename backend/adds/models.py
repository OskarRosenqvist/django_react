from django.contrib.gis.db import models
from core.models import PlocketUser


class Add(models.Model):
    user = models.ForeignKey(PlocketUser, on_delete=models.CASCADE)
    title = models.CharField(max_length=50)
    price = models.IntegerField()
    description = models.TextField(max_length=500)
    street = models.CharField(max_length=50)
    street_nr = models.CharField(max_length=3)
    zipcode = models.CharField(max_length=10)
    country = models.CharField(max_length=20)
    location = models.PointField(geography=True, default='POINT(0.0 0.0)')

    def __str__(self):
        return f'{self.title}'

class Kommun(models.Model):
    name = models.CharField(max_length=50)
    ID = models.IntegerField()
    mpoly = models.MultiPolygonField(srid=3006)

    def __str__(self):
        return f'{self.name}'
