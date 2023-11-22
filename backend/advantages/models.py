from django.db import models

# Create your models here.


class Advantages(models.Model):
    first_raw = models.CharField(max_length=100)
    bold = models.CharField(max_length=50)
    second_raw = models.CharField(max_length=100)
    css_id = models.CharField(max_length=30, default='')

    def __str__(self):
        return f'{self.first_raw} {self.bold} {self.second_raw} '