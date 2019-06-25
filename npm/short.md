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
* adds lodash
```
npm install lodash --save
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
  "dependencies": {
    "lodash": "^4.17.4"
  }
}
```

```
var _ = require('lodash');

const numbers = [33, 46, 76, 44, 28, 19]

_.each(numbers, function (number) {
    console.log(number)
})
```
```
node main
//
33
46
76
44
28
19
```
* adds gulp
```
npm install gulp  gulp-sass --save-dev
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
  "dependencies": {
    "lodash": "^4.17.4"
  },
  "devDependencies": {
    "gulp": "^3.9.1",
    "gulp-sass": "^3.1.0"
  }
}
```
* You can specify which update types your package can accept from dependencies in your package’s package.json file.

For example, to specify acceptable version ranges up to 1.0.4, use the following syntax:

Patch releases: **1.0** or **1.0.x** or **~1.0.4**
Minor releases: **1** or **1.x** or **^1.0.4**
Major releases: ``*`` or ``x``

* removed gulp-sas
```
npm uninstall gulp-sass --save-dev
```
or
```
npm removed gulp --save-dev
```
or
```
npm rm gulp --save-dev
```
or
```
npm un gulp --save-dev
```
* removed lodash
```
npm rm lodash --save
```
