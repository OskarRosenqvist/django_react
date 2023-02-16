from rest_framework.viewsets import ModelViewSet
from rest_framework.permissions import AllowAny
from core.models import PlocketUser
from core.api.serializers import PlocketUserSerializer


class PlocketUserViewSet(ModelViewSet):
    queryset = PlocketUser.objects.all()
    serializer_class = PlocketUserSerializer
    permission_classes = (AllowAny,)
