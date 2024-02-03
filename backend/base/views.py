from django.shortcuts import render
from django.http import JsonResponse
from django.contrib.auth.models import User
from django.contrib.auth.hashers import make_password


from . import products
from base.products import products

from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAdminUser, IsAuthenticated
from rest_framework.response import Response 
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework import serializers, status
from rest_framework_simplejwt.tokens import RefreshToken


@api_view(['GET']) # returns routes in api
def getRoutes(request):
    routes = [
        '/',
        '/register',
        '/dashboard',
        '/contact', # to be added
        '/product/<id>'

    ]
    return Response(routes)

@api_view(['GET'])
def getProduct(request, pk):
    product= None
    for i in products:
        if i['_id'] == pk:
            product = i
            break
    return Response(product)
