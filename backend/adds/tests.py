from django.test import TestCase
from rest_framework.test import APIClient
from .models import Add
from core.tests import UserFactory, PlocketUser


class AddFactory:
    @classmethod
    def create_testadds(self, number):
        if not number:
            number = 1

        for i in range(number):
            add, _ = Add.objects.get_or_create(
                user=PlocketUser.objects.get(id=i+1),
            title=f'Add {i+1}',
            price=100,
            description=f'This is add nr {i+1}'
            )


class TestView(TestCase):
    def setUp(self):
        self.client = APIClient()
        self.number=2
        UserFactory.create_testusers(self.number)
        AddFactory.create_testadds(self.number)


class TestModel(TestCase):

    def setUp(self):
        pass


class AddTestView(TestView):

    def test_get_adds(self):
        response = self.client.get('/api/v1/adds/')
        self.assertEqual(response.data.get('results')[0].get('title'), 'Add 1')
        self.assertEqual(len(response.data.get('results')), 2)
