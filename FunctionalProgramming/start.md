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

### Functions as first-class entities

The idea is to treat functions as values and pass functions like data. This way we can combine different functions to create new functions with new behavior.

Functions as first-class entities can:

- refer to it from constants and variables
- pass it as a parameter to other functions
- return it as result from other functions

```js
const sum = (a, b) => a + b;
const subtraction = (a, b) => a - b;

const doubleOperator = (f, a, b) => f(a, b) * 2;

doubleOperator(sum, 3, 1); // 8
doubleOperator(subtraction, 3, 1); // 4
```

```js
function doubleOperator(f, a, b) {
  return f(a, b) * 2;
}
```

### Higher-order functions

When we talk about higher-order functions, we mean a function that either:

- takes one or more functions as arguments
- returns a function as its result.

The doubleOperator function we implemented above is a higher-order function because it takes an operator function as an argument and uses it.

#### 1. Filter

The filter function expects a true or false value to determine if the element should or should not be included in the result collection.

```js
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var evenNumbers = [];

for (var i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 == 0) {
    evenNumbers.push(numbers[i]);
  }
}

console.log(evenNumbers); // (6) [0, 2, 4, 6, 8, 10]
```

Good!

```js
const even = n => n % 2 == 0;
const listOfNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
listOfNumbers.filter(even); // [0, 2, 4, 6, 8, 10]
```

Good!!!

```js
let people = [
  { name: "TK", age: 26 },
  { name: "Kaio", age: 10 },
  { name: "Kazumi", age: 30 }
];

const olderThan21 = person => person.age > 21;
const overAge = people => people.filter(olderThan21);
overAge(people); // [{ name: 'TK', age: 26 }, { name: 'Kazumi', age: 30 }]
```

### 2. Map

The map method transforms a collection by applying a function to all of its elements and building a new collection from the returned values.

In a imperative JavaScript way, it would be:

```js
var people = [
  { name: "TK", age: 26 },
  { name: "Kaio", age: 10 },
  { name: "Kazumi", age: 30 }
];

var peopleSentences = [];

for (var i = 0; i < people.length; i++) {
  var sentence = people[i].name + " is " + people[i].age + " years old";
  peopleSentences.push(sentence);
}

console.log(peopleSentences); // ['TK is 26 years old', 'Kaio is 10 years old', 'Kazumi is 30 years old']
```

In a declarative JavaScript way, it would be:

```js
const makeSentence = person => `${person.name} is ${person.age} years old`;

const peopleSentences = people => people.map(makeSentence);

peopleSentences(people);
// ['TK is 26 years old', 'Kaio is 10 years old', 'Kazumi is 30 years old']
```

2

```js
var values = [1, 2, 3, -4, 5];

for (var i = 0; i < values.length; i++) {
  values[i] = Math.abs(values[i]);
}

console.log(values); // [1, 2, 3, 4, 5]
```

Good!!

```js
let values = [1, 2, 3, -4, 5];

const updateListMap = values => values.map(Math.abs);

updateListMap(values); // [1, 2, 3, 4, 5]
```

### 3. Reduce

The idea of reduce is to receive a function and a collection, and return a value created by combining the items.

```js
var orders = [
  { productTitle: "Product 1", amount: 10 },
  { productTitle: "Product 2", amount: 30 },
  { productTitle: "Product 3", amount: 20 },
  { productTitle: "Product 4", amount: 60 }
];

var totalAmount = 0;

for (var i = 0; i < orders.length; i++) {
  totalAmount += orders[i].amount;
}

console.log(totalAmount); // 120
```

Using reduce, we can build a function to handle the amount sum and pass it as an argument to the reduce function.

```js
let shoppingCart = [
  { productTitle: "Product 1", amount: 10 },
  { productTitle: "Product 2", amount: 30 },
  { productTitle: "Product 3", amount: 20 },
  { productTitle: "Product 4", amount: 60 }
];

const sumAmount = (currentTotalAmount, order) =>
  currentTotalAmount + order.amount;

const getTotalAmount = shoppingCart => shoppingCart.reduce(sumAmount, 0);

getTotalAmount(shoppingCart); // 120
```

Cool!!!!

```js
let shoppingCart = [
  { productTitle: "Functional Programming", type: "books", amount: 10 },
  { productTitle: "Kindle", type: "eletronics", amount: 30 },
  { productTitle: "Shoes", type: "fashion", amount: 20 },
  { productTitle: "Clean Code", type: "books", amount: 60 }
];

const byBooks = order => order.type == "books";
const getAmount = order => order.amount;
const sumAmount = (acc, amount) => acc + amount;

function getTotalAmount(shoppingCart) {
  return shoppingCart
    .filter(byBooks)
    .map(getAmount)
    .reduce(sumAmount, 0);
}

getTotalAmount(shoppingCart); // 70
```
