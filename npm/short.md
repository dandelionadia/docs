```
npm init 
```

* незавоаняти

```
npm init --yes
```
* створені дані, але хочу перейменувати author, license
```
{
  "name": "test-npm",
  "version": "1.0.0",
  "description": "",
  "main": "main.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC",
}
```
* delete package.json
* create changes
```
npm confige set init-author-name "NAME"
```
```
npm set init-license "MIT"
```
* create new file with changes
```
npm init -y
```

```
{
  "name": "test-npm",
  "version": "1.0.0",
  "description": "",
  "main": "main.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "NAME", <--------
  "license": "MIT", <--------
}
```

* check name autor
```
npm get init-author-name
//Name
```
```
npm config get init-author-name
//Name
```
* remove license and author
```
npm config delete init-author-name
```
```
npm config delete init-license
```
* delete package.json
* create new package.json with changes
```
npm init -y 
```
```
{
  "name": "test-npm",
  "version": "1.0.0",
  "description": "",
  "main": "main.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC",
}
```
*
```
npm install lodash --save
```