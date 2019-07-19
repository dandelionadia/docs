**`Functional programming`** is a programming paradigm — a style of building the structure and elements of computer programs.
(avoids changing-state and mutable data)

### Pure functions

It returns the same result if given the same arguments

```js
let PI = 3.14;

const calculateArea = (radius, pi) => radius _ radius _ pi;

calculateArea(10, PI); // returns 314.0
```

Now we’ll always pass the value of PI as a parameter to the function. So now we are just accessing parameters passed to the function. No external object.

### Reading Files

If our function reads external files, it’s not a pure function — the file’s contents can change.

```js
const charactersCounter = text => `Character count: ${text.length}`;

function analyzeFile(filename) {
  let fileContent = open(filename);
  return charactersCounter(fileContent);
}
```

### Random number generation

Any function that relies on a random number generator cannot be pure.

```js
function yearEndEvaluation() {
  if (Math.random() > 0.5) {
    return "You get a raise!";
  } else {
    return "Better luck next year!";
  }
}
```

### It does not cause any observable side effects

- no pure

```js
let counter = 1;

function increaseCounter(value) {
  counter = value + 1;
}

increaseCounter(counter);
console.log(counter); // 2
```

- pure

```js
let counter = 1;

const increaseCounter = value => value + 1;

increaseCounter(counter); // 2
console.log(counter); // 1
```

See that our pure function increaseCounter returns 2, but the counter value is still the same. The function returns the incremented value without altering the value of the variable.

```
let list = [1, 2, 3, 4, 5];

const incrementNumbers = (list) => list.map(number => number + 1);
```
