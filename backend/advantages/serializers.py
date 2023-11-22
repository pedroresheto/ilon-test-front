from rest_framework import serializers
from advantages.models import Advantages


class AdvantageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Advantages
        fields = ('first_raw', 'bold', 'second_raw', 'css_id')