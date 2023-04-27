from rest_framework.serializers import ModelSerializer, SerializerMethodField
from rest_framework_gis.serializers import GeoFeatureModelSerializer, GeometrySerializerMethodField, GeometryField
from adds.models import Add


class AddSerializer(GeoFeatureModelSerializer):
    is_owner = SerializerMethodField()

    class Meta:
        model = Add
        geo_field = 'location'

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
