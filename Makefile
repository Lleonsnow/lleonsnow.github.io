.PHONY: install dev build preview clean

install:
	npm ci

dev:
	npm run dev

build:
	npm run build

preview: build
	npx --yes serve out -p 3000

clean:
	rm -rf .next out
