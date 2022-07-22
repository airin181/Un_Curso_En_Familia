deploy-front:
	git push heroku-front `git subtree split --prefix client main`:refs/heads/deploy

deploy-back:
	git push heroku-back `git subtree split --prefix server main`:refs/heads/master