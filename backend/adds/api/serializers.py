from rest_framework.serializers import ModelSerializer
from adds.models import Add


class AddSerializer(ModelSerializer):

    class Meta:
        model = Add

        fields = (
            'id',
            'title',
            'price',
            'description',
        )
        read_only_fields = ('id',)
