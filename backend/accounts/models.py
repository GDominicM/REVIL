from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager  # AbstractBaseUser - user creation

# Not yet migrated
# Pacheck muna kay sir
class Account(AbstractBaseUser):
    email = models.EmailField(verbose_name='email', max_length=60, unique=True)
    username = models.CharField(max_length=35, unique=True) # unique -> no same email and username
    created_at = models.DateField(verbose_name='created at', auto_now_add=True)
    is_staff = models.BooleanField(default=False)
    is_instructor = models.BooleanField(default=False)
    is_student = models.BooleanField(default=False)
    joined_at = models.DateTimeField(auto_now_add=True)
    _id = models.AutoField(primary_key=True)
        
    def __str__(self):
        return self.username


class Course(models.Model):
    name = models.CharField(max_length=35, unique=False) # Para pewde same topic diff instructor
    instructor = models.ForeignKey(Account, # Takes key from Account
                                    on_delete=models.CASCADE) # deletes shit (objects) connected to course model ex: comments
    description = models.TextField(null=True, blank=True)
    price = models.DecimalField(max_digits=7, decimal_places=2, null=True, blank=True)
    createdAt = models.DateTimeField(auto_now_add=True)
    review_num = models.IntegerField(null=True, blank=True, default=0)
    _id = models.AutoField(primary_key=True)
    
    def __str__(self):
        return str(self.name)


class Video(models.Model):
    title = models.CharField(max_length=50, unique=False)
    course = models.ForeignKey(Course, on_delete=models.CASCADE)
    description = models.TextField(null=True, blank=True)
    uploaded_at = models.DateTimeField(auto_now_add=True)
    _id = models.AutoField(primary_key=True)

    def __str__(self):
        return str(self.title)
    
class Review(models.Model):
    student = models.ForeignKey(Account, on_delete=models.CASCADE)
    course = models.ForeignKey(Course, on_delete=models.CASCADE)
    name = models.CharField(max_length=200, null=True, blank=True)
    rating = models.IntegerField(null=True, blank=True, default=0)
    comment = models.TextField(null=True, blank=True)

    def __str__(self):
        return str(self.name)
       
class Subscribe(models.Model):
    student = models.ForeignKey(Account, on_delete=models.SET_NULL, null=True)
    paymentMethod = models.CharField(max_length=200, null=True, blank=True)
    price = models.DecimalField(max_digits=7, decimal_places=2, null=True, blank=True)
    is_paid = models.BooleanField(default=False)
    paid_at = models.DateTimeField(auto_now_add=False, null=True, blank=False)
    created_at = models.DateTimeField(auto_now_add=True) # not sure kung sasama pa to
    _id = models.AutoField(primary_key=True)

    def __str__(self):
        return str(self.name)
    
class SubscribeCourse(models.Model):
    course = models.ForeignKey(Course, on_delete=models.SET_NULL, null=True) 
    subscribe = models.ForeignKey(Subscribe, on_delete=models.SET_NULL, null=True)
    name = models.CharField(max_length=200, null=True, blank=True)
    price = models.DecimalField(max_digits=7, decimal_places=2, null=True, blank=True)
    _id = models.CharField(max_length=200, null=True, blank=True)
    
    def __str__(self):
        return str(self.name)





    



    


    


    