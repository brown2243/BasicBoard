from .models import MyBoard
from rest_framework import serializers, viewsets

class MyBoardSerializer(serializers.ModelSerializer):

	class Meta:
		model=MyBoard
		fields=('Board_Title','Board_User','Board_Main')

class MyBoardViewSet(viewsets.ModelViewSet):
	queryset=MyBoard.objects.all()
	serializer_class = MyBoardSerializer
