from django.db import models

# Create your models here.
class Category(models.Model):
    title = models.CharField(max_length=225)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def _str_(self):
        return self.title

    def _repr_(self):
        return self.title

    class Meta:
        verbose_name_plural = "categories"