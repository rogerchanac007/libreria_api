from rest_framework import routers
from .viewsets import LibroViewSet

router = routers.SimpleRouter()
router.register("libros", LibroViewSet)

urlpatterns = router.urls