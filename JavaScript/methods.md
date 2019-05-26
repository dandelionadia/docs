T## 1 concat
```js
var a = [1,2,3];
var b = [4,5,6];
var foo = ['foo'];
```
```js
var c = a.concat(b, foo);
 console.log(c);
//[1, 2, 3, 4, 5, 6, "foo"]
```
## 2 map
```js
var numbs = [1,2,3,4]; 
var newnumbs = numbs.map(function(num) {
  return num * 2;
})

console.log(newnumbs);
 // [2, 4, 6, 8]
```
```js
var b = numbs.map(function(num) {
  return num % 2 === 0;
})

 console.log(b);
```

## 3 slice
```js
var animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
 console.log(animals.slice(1, 3));
// ["bison", "camel"]
```       
## 4 filter
```js
var words = ['spa', 'limi', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter((word) => word.length > 4);
 console.log(result);
// ["elite", "exuberant", "destruction", "present"]
```
## 5 includes
```js
var numbs = [1,2,3,4];
console.log(numbs.includes(8));
// false
```
## 6 forEch
```js
const items = ['item1', 'item2', 'item3'];
const copy = [];

items.forEach(function(item){
  copy.push(item);
})
console.log(copy);
 // ["item1", "item2", "item3"]
```
## 7 reduce
```js
const array = [1,2,3,4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;
console.log(array.reduce(reducer, 2));

1 + 2 + 3 + 4
console.log(array.reduce(reducer));
expected output: 10

5 + 1 + 2 + 3 + 4
console.log(array.reduce(reducer, 5));
expected output: 15
```
## 8 some
```js
const arr = [1,10,11,23,5,4];
const largeNumbs = arr.some((numb) => numb > 5);
console.log(largeNumbs);
```
## 9 every
```js
const array2 = [1,5,7,9,11];
const greaterNumb = array2.every((numb) => numb > 3);
console.log(greaterNumb);
```
## 10 sort
```js
const arraynum = [1,5,2,4,3];
arraynum.sort((a,b) => a - b);
console.log(arraynum);

// 
const arr2 = [1, 2, 3, 4, 5, 6];
const alpha = ['e', 'a', 'c', 'u', 'y'];
```
 sort in descending order
```js
  descOrder = arr2.sort(function(a, b) {
    console.log(a,b);
    return a > b ? -1 : 1;
  });
  console.log(descOrder); 
  ascOrder = alpha.sort((a, b) => a > b ? 1 : -1);
   console.log(ascOrder);
```
## 11 of
```js
const nums = Array.of(1, 2, 3, 4, 5, 6);
console.log(nums);
// [1, 2, 3, 4, 5, 6]
```
## 12 from
```js
  const name = 'frugence';
  const nameArray = Array.from(name);

  console.log(name); 
  console.log(nameArray);
```
## 13 for
```js
var str = "";

for (var i = 0; i < 9; i++) {
  str = str + i;
}

console.log(str);
// expected output: "012345678"

```

## 14 pop

The pop() method removes the last element from an array and returns that element. This method changes the length of the array.

```js
var plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];

console.log(plants.pop());
// expected output: "tomato"

console.log(plants);
// expected output: Array ["broccoli", "cauliflower", "cabbage", "kale"]

plants.pop();

console.log(plants);
// expected output: Array ["broccoli", "cauliflower", "cabbage"]
```