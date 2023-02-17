from rest_framework.serializers import ModelSerializer
from rest_framework.serializers import SerializerMethodField
from core.models import PlocketUser


class PlocketUserSerializer(ModelSerializer):
    can_edit_others = SerializerMethodField()

    class Meta:
        model = PlocketUser

        fields = (
            'id',
            'username',
            'first_name',
            'last_name',
            'email',
            'can_edit_others',
        )
        read_only_fields = (
            'id',
        )

    def get_can_edit_others(self, obj):
        return obj.has_perm('core.can_edit_others')
