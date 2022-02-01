from django.contrib import messages
from django.db import reset_queries
from django.http.response import HttpResponse
from django.shortcuts import redirect, render
from django.contrib.auth.models import User, auth

# Create your views here.


def index(request):
    return render(request,'index.html')

def reg(request):
    return render(request,'register.html')

def log(request):
    return render(request,'login.html')

def register(request):

    if request.method == 'POST':
        first_name = request.POST['first_name']
        last_name = request.POST['last_name']
        email = request.POST['email']
        username = request.POST['username']
        password = request.POST['password1']
        confirm_password = request.POST['password2']
        valid = True
        if(valid):
            if email[-10:] != '@gmail.com':
                messages.info(request,'Please enter a valid email.!')
                valid = False
                return redirect('register')
            elif User.objects.filter(email=email).exists():
                messages.info(request,'Email already taken')
                valid = False
                return redirect('register')
            elif User.objects.filter(username=username).exists():
                messages.info(request,'Username already taken')
                valid = False 
                return redirect('register')
            else:
                SpecialSymbol =['$', '@', '#', '%','!','^','&','*'] 

                if len(password) < 6: 
                    messages.info(request,'Password length should be at least 6') 
                    valid = False
                    return redirect('register')

                if len(password) > 20: 
                    messages.info(request,'length should be not be greater than 20') 
                    valid = False
                    return redirect('register')

                if not any(char.isdigit() for char in password): 
                    messages.info(request,'Password should have at least one numeral') 
                    valid = False
                    return redirect('register')

                if not any(char.isupper() for char in password): 
                    messages.info(request,'Password should have at least one uppercase letter') 
                    valid = False
                    return redirect('register')

                if not any(char.islower() for char in password): 
                    messages.info(request,'Password should have at least one lowercase letter') 
                    valid = False
                    return redirect('register')

                if not any(char in SpecialSymbol for char in password): 
                    messages.info(request,'Password should have at least one special character') 
                    valid = False
                    return redirect('register')
        if(valid==True): 
            if password == confirm_password:      
                user = User.objects.create_user(username=username,password=password,email=email,first_name=first_name,last_name=last_name)
                user.save()
                messages.info(request,'Successfully Registered..!! Please Login here')
                return redirect('login')
            else:
                messages.info(request,'Passwords not matching')
                return redirect('register')
    

    return render(request,'register.html')

def login(request):
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']
        # first_name = request.POST['first_name']
        # last_name = request.POST['last_name']
        user = auth.authenticate(username=username,password=password)
        if user is not None:
            auth.login(request,user)
            return render(request,'success.html')
        else:
            messages.info(request,'Invalid Credentials')
            return redirect('login')
    else:
        return render(request,'login.html')

def logout(request):
    auth.logout(request)
    return redirect('/')