from rest_framework.routers import DefaultRouter
from adds.api.views import AddViewSet
from core.api.views import PlocketUserViewSet

router = DefaultRouter()
router.register('adds', AddViewSet)
router.register('users', PlocketUserViewSet)
urlpatterns = []
urlpatterns += router.urls
