from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .serializers import PlantSerializer
from .models import Plant


# def home(request):
#     return 

@api_view(['GET'])
def plant_list(request):
    if request.method == 'GET':
        plants = Plant.objects.all()
        serializer = PlantSerializer(plants, many=True)
        return Response(serializer.data)

@api_view(['GET'])
def plant_detail(request, id):
    try:
        plant = Plant.objects.get(pk=id)
    except Plant.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    
    # if request.method == 'GET':
    serializer = PlantSerializer(plant)
    return Response(serializer.data)

    
