.PHONY: build
build:
	npm run build
	rm -rf docs
	mv build docs
	git add .
	git commit -m "chore: Rebuild"
