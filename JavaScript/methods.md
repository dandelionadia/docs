## 1 concat

```js
var a = [1, 2, 3];
var b = [4, 5, 6];
var foo = ["foo"];
```

```js
var c = a.concat(b, foo);
console.log(c);
//[1, 2, 3, 4, 5, 6, "foo"]
```

## 2 map

```js
var numbs = [1, 2, 3, 4];
var newnumbs = numbs.map(function (num) {
  return num * 2;
});

console.log(newnumbs);
// [2, 4, 6, 8]
```

```js
var b = numbs.map(function (num) {
  return num % 2 === 0;
});

console.log(b);
```

## 3 slice

```js
var animals = ["ant", "bison", "camel", "duck", "elephant"];
console.log(animals.slice(1, 3));
// ["bison", "camel"]
```

## 4 filter

```js
var words = ["spa", "limi", "elite", "exuberant", "destruction", "present"];

const result = words.filter((word) => word.length > 4);
console.log(result);
// ["elite", "exuberant", "destruction", "present"]
```

## 5 find()

> The find() method returns the value of the first element in the provided array that satisfies the provided testing function.

**find(element, index(Optional, The index of the current element), thisArg(Optional))**

```js
const array1 = [5, 12, 8, 130, 44];

const found = array1.find((element) => element > 10);

console.log(found);
// 12
```

```js
const inventory = [
  { name: "apples", quantity: 2 },
  { name: "bananas", quantity: 0 },
  { name: "cherries", quantity: 5 },
];

const result = inventory.find(({ name }) => name === "cherries");

console.log(result);
// { name: 'cherries', quantity: 5 }
```

## 6 findIndex()

> The findIndex() method returns the index of the first element in the array that satisfies the provided testing function. Otherwise, it returns -1, indicating that no element passed the test.

**arr.findIndex(element, index(The index of the current element; Optional), array(Optional))**

```js
const array1 = [5, 12, 8, 130, 44];

const isLargeNumber = (element) => element > 13;

console.log(array1.findIndex(isLargeNumber));
// expected output: 3
```

```js
const fruits = ["apple", "banana", "cantaloupe", "blueberries", "grapefruit"];

const index = fruits.findIndex((fruit) => fruit === "blueberries");

console.log(index); // 3
console.log(fruits[index]); // blueberries
```

## 7 indexOf()

> The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.

**arr.indexOf(searchElement[, fromIndex])**

```js
const beasts = ["ant", "bison", "camel", "duck", "bison"];

console.log(beasts.indexOf("bison"));
// expected output: 1

// start from index 2
console.log(beasts.indexOf("bison", 2));
// expected output: 4

console.log(beasts.indexOf("giraffe"));
// expected output: -1
```

```js
var array = [2, 9, 9];
array.indexOf(2); // 0
array.indexOf(7); // -1
array.indexOf(9, 2); // 2
array.indexOf(2, -1); // -1
array.indexOf(2, -3); // 0
```

## 8 includes()

> The includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate.

**includes(searchElement, fromIndex(Optional))**

```js
var numbs = [1, 2, 3, 4];
console.log(numbs.includes(8));
// false
```

```js
const foo = ["a", "b", "c"];
foo.includes("b", 1);
//true;
```

```js
[1, 2, 3].includes(3, -1);
// true
true;
```

## 9 forEch

```js
const items = ["item1", "item2", "item3"];
const copy = [];

items.forEach(function (item) {
  copy.push(item);
});
console.log(copy); // ["item1", "item2", "item3"]
```

## 10 reduce

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

- **accumulator**
  Аккумулятор, аккумулирующий значение, которое возвращает функция callback после посещения очередного элемента, либо значение initialValue, если оно предоставлено (смотрите пояснения ниже).

- **currentValue**
  Текущий обрабатываемый элемент массива.\*

- **initialValue** Необязательный
  Необязательный параметр. Объект, используемый в качестве первого аргумента при первом вызове функции callback.\*

## 11 some

```js
const arr = [1, 10, 11, 23, 5, 4];
const largeNumbs = arr.some((numb) => numb > 5);
console.log(largeNumbs);
```

## 12 every

```js
const array2 = [1, 5, 7, 9, 11];
const greaterNumb = array2.every((numb) => numb > 3);
console.log(greaterNumb);
```

## 13 sort

```js
const arraynum = [1, 5, 2, 4, 3];
arraynum.sort((a, b) => a - b);
console.log(arraynum);

//
const arr2 = [1, 2, 3, 4, 5, 6];
const alpha = ["e", "a", "c", "u", "y"];
```

sort in descending order

```js
descOrder = arr2.sort(function (a, b) {
  console.log(a, b);
  return a > b ? -1 : 1;
});
console.log(descOrder);
ascOrder = alpha.sort((a, b) => (a > b ? 1 : -1));
console.log(ascOrder);
```

## 14 of

```js
const nums = Array.of(1, 2, 3, 4, 5, 6);
console.log(nums);
// [1, 2, 3, 4, 5, 6]
```

## 15 from

```js
const name = "frugence";
const nameArray = Array.from(name);

console.log(name);
console.log(nameArray);
```

## 16 for

```js
var str = "";

for (var i = 0; i < 9; i++) {
  str = str + i;
}

console.log(str);
// expected output: "012345678"
```

## 17 pop

The pop() method removes the last element from an array and returns that element. This method changes the length of the array.

```js
var plants = ["broccoli", "cauliflower", "cabbage", "kale", "tomato"];

console.log(plants.pop());
// expected output: "tomato"

console.log(plants);
// expected output: Array ["broccoli", "cauliflower", "cabbage", "kale"]

plants.pop();

console.log(plants);
// expected output: Array ["broccoli", "cauliflower", "cabbage"]
```

## 18 Splice

The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new element.

Метод splice() изменяет содержимое массива, удаляя существующие элементы и/или добавляя новые.

```js
var myFish = ["angel", "clown", "mandarin", "sturgeon"];
var removed = myFish.splice(2, 0, "drum");

// myFish равен ["angel", "clown", "drum", "mandarin", "sturgeon"]
// removed равен [], ничего не удалено
```

```js
var myFish = ["angel", "clown", "drum", "mandarin", "sturgeon"];
var removed = myFish.splice(3, 1);

// removed равен ["mandarin"]
// myFish равен ["angel", "clown", "drum", "sturgeon"]
```

##

##

## 1. JSON.parse()

_method parses a JSON string, converts a string back to an object (array)._

```js
const json = '{"result":true, "count":42}';
const obj = JSON.parse(json);
console.log(obj);

// {result: true, count: 42}
```

```js
// response.json() does JSON.parse.
fetch("...").then((response) => response.json());
```

## 2. JSON.stringify()

```js
const json = { result: true, count: 42 };
const obj = JSON.stringify(json);
console.log(obj);
// {"result":true,"count":42}
```

```js
useEffect(() => {
  fetch("http://192.168.0.122:8043/form", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ firstName: "Pop" }),
  });
}, []);
```

## 3. Number

```js
const str = "1,5,7";
str.split(",");
// ["1", "5", "7"]
str.split(",").map(Number);
// [1, 5, 7]
```

```js
Number("123");
// 123
Number([4]);
//4
```

## 4. parseFloat()

_The **parseFloat()** function parses an argument (converting it to a string first if needed) and returns a floating point number._

```js
parseFloat(3.14);
3.14;
parseFloat("3.14");
3.14;
```

## 5. join()

_The **join()** method creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string._

```js
const elements = ["Fire", "Air", "Water"];

console.log(elements.join());
// expected output: "Fire,Air,Water"

console.log(elements.join(""));
// expected output: "FireAirWater"

console.log(elements.join("-"));
// expected output: "Fire-Air-Water"
```
