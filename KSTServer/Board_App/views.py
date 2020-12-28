from django.shortcuts import render
from django.http imort HttpResponse

# Create your views here.
def index(request):
	return render(request, 'Board_App/index.html')