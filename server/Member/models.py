from django.db import models

# Create your models here.
# 아직 회원기능은 없지만 나중을 위해서 만들어놨어용. 게시판, 댓글에 사용될 유저아이디나 닉네임의 원본 데이터가 저장될 곳이에용
 

class Member(models.Model):
	Member_ID=models.CharField(max_length=20, unique=True)
	Member_NickName=models.CharField(max_length=20, unique=True)
	Member_Mail=models.CharField(max_length=50, unique=True)
	Member_Address=models.CharField(max_length=150)
