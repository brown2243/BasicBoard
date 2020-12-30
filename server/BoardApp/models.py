from django.db import models

# Create your models here.
class MyBoard(models.Model):
	Board_Title = models.CharField(max_length=100)
	Board_User=models.CharField(max_length=20)
	#Board_User 필드는 나중에 회원기능 생성하고나면 회원 아이디나 닉네임으로 연결할까 싶어용
	Board_Main=models.TextField()

	def __Str__(self):
		return (self.Board_Title)



