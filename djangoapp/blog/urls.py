from rest_framework import routers
from .views import CategoryViewSet

router = routers.DefaultRouter()
router.register('categories', CategoryViewSet)

urlpatterns = []
urlpatterns += router.urls
