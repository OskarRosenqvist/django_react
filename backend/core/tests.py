from django.test import TestCase
from .models import PlocketUser


class UserFactory:
    @classmethod
    def create_testusers(self, number):
        if not number:
            number = 1

        for i in range(number):
            user, _ = PlocketUser.objects.get_or_create(
                username=f'test_user{i}',
                first_name='test',
                last_name=f'user{i}',
                email=f'test_user{i}@test.com',
            )


class TestView(TestCase):
    def setUp(self):
        pass


class TestModel(TestCase):

    def setUp(self):
        pass