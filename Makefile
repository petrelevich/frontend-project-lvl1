install:
	npm install
brain-games:
	node bin/brain-games.js
brain-even:
	bin/brain-even
brain-calc:
	bin/brain-calc
publish:
	npm publish --dry-run
lint: 
	npx eslint .