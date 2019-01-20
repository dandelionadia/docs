## Reduce
Метод reduce() выполняет функцию callback один раз для каждого элемента.
```js
function sum () {
  let argsArray = Array.from(arguments);
  return argsArray.reduce(function(sum, current){
    return sum + current
  }, 0)
console.log(sum) //55
}
sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
```
При первом вызове функции, параметры **accumulator** и **currentValue** могут принимать одно из двух значений. Если при вызове **reduce()** передан аргумент **initialValue**, то значение accumulator будет равным значению **initialValue**, а значение **currentValue** будет равным первому значению в массиве. Если аргумент **initialValue** не задан, то значение **accumulator** будет равным первому значению в массиве, а значение **currentValue** будет равным второму значению в массиве.



```js
const array = [1, 2, 3]

array.reduce(function (acc, entry) {
    if (entry % 2 === 0) {
        return acc + entry
    } else {
        return acc
    }
}, 0)
```

```js
const array = [1, 2, 3]
// (0,1)
var result = array.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue
}, 0)

console.log(result) //6
```

```js
const array = [1, 2, 3]
// (4,1)
var result = array.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue
}, 4)

console.log(result) //10
```


```js
const array = [1, 2, 3]
// (1,2)
var result = array.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue
})

console.log(result) //6
```
Чтобы суммировать значения, содержащиеся в массиве объектов, вы должны указать initialValue, чтобы каждый элемент смог пройти через callback.
```js
var initialValue = 0;

var sum = [{x: 2}, {x: 3}, {x: 4}]

var result = sum.reduce(function(acc, curent){
    return acc + curent.x
}, initialValue)

console.log(result)  // 9
```
//*склеювання масивів*
```js
var flattened = [[1,2], [3,4], [5,6]]
var result = flattened.reduce(function(a,b){
    return a.concat(b)
})
console.log(result)  // [1, 2, 3, 4, 5, 6]
```

```js
var friends = [ 
{ name: "Anna", books: ["Bible", "Harry Potter"], age: 21 }, 
{ name: "Bob", books: ["War and peace", "Romeo and Juliet"], age: 26 },
{ name: "Alice", books: ["The Lord of the Rings", "The Shining"], age: 18 }
]

var allBooks = friends.reduce(function(a, b){
	return [...a , ...b.books]
}, ['Start'])

console.log(allBooks) // ["Start", "Bible", "Harry Potter", "War and peace", "Romeo and Juliet", "The Lord of the Rings", "The Shining"]
```
//*інший спосіб вирішення*

```js
var allBooks = friends.reduce(function(a, b){
	 return a.concat(b.books)
}, ['Start'])

console.log(allBooks) // ["Start", "Bible", "Harry Potter", "War and peace", "Romeo and Juliet", "The Lord of the Rings", "The Shining"]
```

//*додавання віку*
```js
var allBooks = friends.reduce(function(a, b){
	 return a + b.age
}, 111)

console.log(allBooks) // 176
```

// *додаємо імена*
```js
var allBooks = friends.reduce(function(a, b){
	 return a.concat(b.name)
}, ['Nadiia'])

console.log(allBooks)  //["Nadiia", "Anna", "Bob", "Alice"]
```

## reduceRight

**reduceRight()** применяет функцию к аккумулятору и каждому значению массива (справа-налево), сводя его к одному значению.