deploy-front:
	git push heroku-front `git subtree split --prefix client deploy`:refs/heads/master

deploy-back:
	git push heroku-back `git subtree split --prefix server deploy`:refs/heads/master
	