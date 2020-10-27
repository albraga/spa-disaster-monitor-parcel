REPOSITORY = spa-disaster-monitor-parcel

help:
	@echo -B --always-make
	@echo first //make this the first and the only commit
	@echo repo //create repository

.PHONY: first
first:
	rm -rfv .git
	git init
	git add --all
	git commit -m "."
	git remote add origin https://github.com/albraga/${REPOSITORY}
	git push -u --force origin master 

.PHONY: repo
repo:
	curl -u 'albraga' https://api.github.com/user/repos -d '{"name":"${REPOSITORY}"}'
	$(MAKE) first

.PHONY: pull
pull:
	git fetch --all
	git reset --hard origin/master

.PHONY: push
push:
	git add --all
	git commit -m '.'
	git push

.PHONY: dev
dev:
	parcel src/index.html

.PHONY: build
build:
	parcel build src/index.html --out-dir docs --public-url ./

.PHONY: docs
docs:
	rm -rfv docs
	mv dist docs
	@echo sed -i 's+src="/js+src="js+g' docs/index.html

.PHONY: serve
serve:
	cd docs && php -S localhost:8080