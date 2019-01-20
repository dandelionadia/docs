## Деструктуризация массивов

При деструктуризации массива:

* 1-ая переменная — первый элемент массива
* 2-ая переменная — второй элемент массива

```js
let [one, two] = [1, 2, 3, 4, 5];
console.log(one); // 1
console.log(two); // 2
```

При деструктуризации массива часто извлекаются только необходимые переменные. Для получения остатка используется rest оператор следующим способом:

```js
let scores = ['98', '95', '93', '90', '87', '85'];
let [first, second, third, ...rest] = scores;

console.log(first); // 98
console.log(second); // 95
console.log(third); // 93
console.log(rest); // [90, 87, 85]
```
Перестановка переменных:
```js
let a = 2;
let b = 3;
// перестановка деструктуризацией массива
[a, b] = [b, a];
console.log(a); // 3
console.log(b); // 2
```

Деструктуризация массивов при объявлении функций

```js
function box(i) {
let [first, second, third] = i;
console.log(first) //22
console.log(third) //undefined
}

box([22,0])
```

```js
function sayMyName(info = {}) {
  let { firstName = 'John', lastName = 'Maverick' } = info
  console.log(firstName, lastName)
}

sayMyName() //John Maverick
sayMyName({firstName : 'AA'}) //AA Maverick
```

## Rest параметр
При необходимости получить остальные данные мы бы обратились к rest параметру.

```js
let scores = ['98', '95', '93', '90', '87', '85'];
let [first, second, third, ...restOfScores] = scores;
console.log(restOfScores); // [90, 97, 95]
```
rest параметр переводить данные в массив и появляется в параметрах функций и при деструктуризации массивов.

## Spread оператор
Spread оператор действует противоположно rest параметру. В свободной трактовке оператор принимает массив и разворачивает его в разделенный запятыми список аргументов.

```js
let array = ['one', 'two', 'three'];
// Ниже строки кода равнозначны
console.log(...array); // one two three
console.log('one', 'two', 'three'); // one two three
```

```js
let combinedArray = array1.concat(array2).concat(array3);
console.log(combinedArray) // ['one', 'two', 'three', 'four', 'five', 'six'];
```
spread оператор позволяет объединять массивы в новый массив способом, который легче для чтения:

```js
let combinedArray = [...array1, ...array2, ...array3];
console.log(combinedArray); // ['one', 'two', 'three', 'four', 'five', 'six']
```
