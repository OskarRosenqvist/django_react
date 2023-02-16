from django.contrib.auth.models import User


class PlocketUser(User):

    def __str__(self):
        return f'{self.get_full_name()}'

    class Meta:
        permissions = (
            ('can_edit_others', 'Can edit other users adds'),
        )


