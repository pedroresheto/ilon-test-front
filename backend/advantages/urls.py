from django.urls import path
from . import views


urlpatterns = [
    path('api/advantages/', views.AdvantagesView.as_view() ),
]