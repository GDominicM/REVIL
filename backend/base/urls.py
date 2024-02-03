from .import views
from django.urls import path

urlpatterns = [
    path('', views.getRoutes, name="routes"),
    # path('product/', views.getProducts, name='products'),
    path('product/<str:pk>/', views.getProduct, name='product'),

]
