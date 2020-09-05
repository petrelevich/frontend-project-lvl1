install:
	npm install
brain-games:
	node bin/brain-games.js
brain-even:
	bin/brain-even
brain-calc:
	bin/brain-calc
brain-gcd:
	bin/brain-gcd	
publish:
	npm publish --dry-run
lint: 
	npx eslint .