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
        read_only_fields = ('id',)

    def get_can_edit_others(self, obj):
        current_user = self.context['request'].user
        print(current_user)
        # print()
        return current_user.has_perm('can_edit_others')
