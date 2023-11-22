from django.shortcuts import render
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from rest_framework.viewsets import ModelViewSet

from advantages.models import Advantages
from advantages.serializers import AdvantageSerializer
from rest_framework import generics

# Create your views here.


class AdvantagesView(generics.ListCreateAPIView):
    queryset = Advantages.objects.all()
    serializer_class = AdvantageSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]