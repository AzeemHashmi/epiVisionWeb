# from djoser.serializers import UserCreateSerializer
# from django.contrib.auth import get_user_model
from rest_framework import serializers 
from .models import Accounts

# User = get_user_model()

# class UserCreateSerializer(UserCreateSerializer):
#     class Meta(UserCreateSerializer.Meta):
#         model = User
#         fields = ('id', 'email', 'name', 'password')
#         # fields = ('id', 'email', 'first_name', 'last_name', 'password')

class AccountsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Accounts
        fields = '__all__'

