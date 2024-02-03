from django.shortcuts import render
from django.http import JsonResponse
from django.contrib.auth.models import User
from django.contrib.auth.hashers import make_password

from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAdminUser, IsAuthenticated
from rest_framework.response import Response 
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework import serializers, status
from rest_framework_simplejwt.tokens import RefreshToken


class UserSerializer(serializers.ModelSerializer): # edit for custom user model
    name = serializers.SerializerMethodField(read_only=True)
    _id = serializers.SerializerMethodField(read_only=True)
    isAdmin = serializers.SerializerMethodField(read_only=True)
    class Meta:
        model = User
        fields = ['id', 'username', 'email']

    def get__id(self,obj):
        return obj.id
    
    def get_isAdmin(self, obj):
        return obj.is_staff
    
    def get_name(self, obj):
        name = obj.first_name
        if name == '':
            name = obj.email
        return name

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
   def validate(self, attrs):
        data = super().validate(attrs)

        serializer = UserSerializerwithToken(self.user).data

        for k,v in serializer.items():
            data[k] = v

        return data 


class UserSerializerwithToken(UserSerializer):
    token = serializers.SerializerMethodField(read_only=True)
    class Meta:
        model = User # edit if custom user model
        fields = ['id', '_id', 'username', 'email', 'name', 'isAdmin', 'token']

    def get_token(self,obj):
        token = RefreshToken.for_user(obj)
        return str(token.access_token)


class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class= MyTokenObtainPairSerializer

@api_view(['GET'])
def getUserProfile(request): # user should be logged in
    user = request.user
    serializer = UserSerializer(user, many=False)
    return Response(serializer.data)


@api_view(['GET'])
@permission_classes([IsAdminUser]) # only admins can access the view
def getUsers(request):
    users = User.objects.all()
    serializer = UserSerializer(users, many=True)
    return Response(serializer.data)

@api_view(['POST'])
def registerUser(request):
    try:
        data = request.data

        user = User.objects.create(        
            first_name = data['name'],
            username = data['email'],
            email = data['email'],
            password = make_password(data['password']), 
        )
        serializer = UserSerializerwithToken(user, many=False)
        return Response(serializer.data)
    except: 
     message = {'detail': 'This email is already registered to a user'}
     return Response(message, status=status.HTTP_400_BAD_REQUEST)
    

@api_view(['POST'])
@permission_classes([IsAdminUser]) # Only logged in users can access view
def logoutUser(request):
    token = request.data.get('refresh_token')

    if not token:
        return Response({'detail': 'Refresh token is required to Logout'}, status=status.HTTP_400_BAD_REQUEST)
 

    RefreshToken(token).blacklist()
    return Response({'detail': 'Your Account has been Logged out succesfully'}, status=status.HTTP_200_OK)
    # Include error message if logout unsuccesful