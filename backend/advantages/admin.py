from django.contrib import admin
from django.contrib.admin import ModelAdmin

from advantages.models import Advantages


# Register your models here.


@admin.register(Advantages)
class AdvantagesAdmin(ModelAdmin):
    pass