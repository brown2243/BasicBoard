from .models import Member
from rest_framework import serializers, viewsets

class MemberSerializer(serializers.ModelSerializer):

	class Meta:
		model = Member
		fields = ('Member_ID','Member_NickName','Member_Mail','Member_Address')

class MemberViewSet(viewsets.ModelViewSet):
	queryset = Member.objects.all()
	serializer_class = MemberSerializer