from django.db import models
from lookup.models import Lookup
# from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, BaseUserManager

# class UserAccountManager(BaseUserManager):
#     # def create_user(self, email, password=None, **extra_fields):
#     def create_user(self, email,name, password=None):
#         if not email:
#             raise ValueError('Users must have an email address')

#         email = self.normalize_email(email)
#         # user = self.model(email=email, **extra_fields)
#         user = self.model(email=email, name=name)

#         #To hash a password
#         user.set_password(password)
#         user.save()

#         return user

# class UserAccount(AbstractBaseUser, PermissionsMixin):
#     email = models.EmailField(max_length=255, unique=True)
#     name = models.CharField(max_length=255)
#     # first_name = models.CharField(max_length=255)
#     # last_name = models.CharField(max_length=255)
#     is_active = models.BooleanField(default=True)
#     is_staff = models.BooleanField(default=False)

#     objects = UserAccountManager()

#     USERNAME_FIELD = 'email'
#     REQUIRED_FIELDS = ['name']

#     def get_full_name(self):
#         return self.name

#     def get_short_name(self):
#         return self.name
    
#     def __str__(self):
#         return self.email
    

class Accounts(models.Model):
    print("I am in Accounts table ")
    Id = models.AutoField(primary_key=True)
    User_Name = models.CharField(max_length=255)
    password = models.CharField(max_length=20)
    category = models.ForeignKey(Lookup, on_delete=models.CASCADE)

    class Meta:
        app_label = 'accounts'
        db_table = 'Accounts'
    
