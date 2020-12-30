from .models import Comment
from rest_framework import serializers, viewsets

class CommentSerializer(serializers.ModelSerializer):

	class Meta:
		model=Comment
		fields=('Comment_User','Comment_Main')

class CommentViewSet(viewsets.ModelViewSet):
	queryset=Comment.objects.all()
	serializer_class = CommentSerializer