from rest_framework.serializers import ModelSerializer, SerializerMethodField
from adds.models import Add


class AddSerializer(ModelSerializer):
    is_owner = SerializerMethodField()

    class Meta:
        model = Add

        fields = (
            'id',
            'user',
            'title',
            'price',
            'description',
            'is_owner',
        )
        read_only_fields = ('id',)

    def get_is_owner(self, obj):
        return obj.user == self.context['request'].user
