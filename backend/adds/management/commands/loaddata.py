from adds.models import Kommun
from django.core.management.base import BaseCommand
from django.contrib.gis.utils import LayerMapping
from pathlib import Path


class Command(BaseCommand):
    def handle(self, **options):

        mapping = {
            'name': 'KOM_NAMN',
            'ID': 'ID',
            'mpoly': 'MULTIPOLYGON',
        }

        kommun_shp = Path(__file__).resolve().parents[2] / "data" / "alla_kommuner.shp"
        lm = LayerMapping(Kommun, kommun_shp, mapping, transform=False)
        lm.save(strict=True, verbose=True)
