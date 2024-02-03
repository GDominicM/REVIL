from .import views
from django.urls import path
from rest_framework_simplejwt.views import TokenObtainPairView

urlpatterns = [
    path('users/login', views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('users/logout', views.logoutUser, name="logout"),
    path('users/profile', views.getUserProfile, name='user_profile'),
    path('users/register', views.registerUser, name="register"),
    path('users', views.getUsers, name='users'),


]
