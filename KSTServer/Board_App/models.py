from django.db import models

# Create your models here.
class Board(models.Model):
	Board_title = models.CharField(max_length=200)
	Board_User = models.CharField(max_length=50)
	Board_Maintext = models.TextField()

	def __str__(self):
		return self.title
	