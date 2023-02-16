from rest_framework.routers import DefaultRouter
from adds.api.views import AddViewSet

router = DefaultRouter()
router.register('adds', AddViewSet)
urlpatterns = []
urlpatterns += router.urls
