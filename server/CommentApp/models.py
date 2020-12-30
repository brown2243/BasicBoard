from django.db import models

# Create your models here.
class Comment(models.Model):
	Comment_User=models.CharField(max_length=20)
	#Comment_User 부분도 회원기능 생기면 Board_User 때랑 마찬가지로 회원 아이디나 닉네임으로 연결할까 싶습니다.
	Comment_Main=models.TextField()