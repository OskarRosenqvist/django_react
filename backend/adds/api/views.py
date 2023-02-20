from rest_framework.viewsets import ModelViewSet
from rest_framework.permissions import AllowAny, IsAuthenticatedOrReadOnly
from adds.models import Add
from adds.api.serializers import AddSerializer


class AddViewSet(ModelViewSet):
    queryset = Add.objects.all()
    serializer_class = AddSerializer
    permission_classes = (IsAuthenticatedOrReadOnly,)
