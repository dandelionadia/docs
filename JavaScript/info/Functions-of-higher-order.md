**Функция высшего порядка** — это функция, которая может принимать другую функцию в качестве аргумента или возвращать другую функцию в качестве результата.

**callback** — Функция обратного вызова — функция, которая выполняется в конце операции, когда все остальные операции уже завершены. Как правило, функция обратного вызова передается в качестве последнего аргумента функции. Часто функцию обратного вызова определяют как анонимную функцию.

## **Apply**
```js
function foo(number) {
  return number * this
}

foo(5) // NaN
foo.apply(3, [5]) // 15
foo.coll(3, 5) // 15
```
## **Call**
```js
var user = {
  firstName: "Василий",
  surname: "Петров",
  patronym: "Иванович"
};

function showFullName(firstPart, lastPart) {
  alert( this[firstPart] + " " + this[lastPart] );
}

// f.call(контекст, аргумент1, аргумент2, ...)
showFullName.call(user, 'firstName', 'surname') // "Василий Петров"
showFullName.call(user, 'firstName', 'patronym') // "Василий Иванович"
```

## **Bind**
```js
this.x = 9;
var module = {
  x: 81,
  getX: function() { return this.x; }
};

module.getX(); // 81

var getX = module.getX; // var getX = function() { return this.x; }
getX(); // 9

var boundGetX = getX.bind(module); 
// var boundGetX = module.getX.bind(module)
//  function() { return module.x; }
boundGetX(); // 81
```
#
У массивов есть несколько полезных методов высшего
порядка – **forEach**, чтобы сделать что-то с каждым
элементом, **filter** – чтобы построить новый массив, где
некоторые значения отфильтрованы, **map** – чтобы
построить новый массив, каждый элемент которого
пропущен через функцию, **reduce** – для комбинации всех
элементов массива в одно значение.
У функций есть метод **apply** для передачи им аргументов
в виде массива. Также у них есть метод **bind** для создания
копии функции с частично заданными аргументами.

## **Join**

*Метод join() переобразует все элементы массива в строки и объединяет их в одну большую строку. Элемент массива с типом undefined или null преобразуется в пустую строку.*
```js
var elements = ['Fire', 'Wind', 'Rain'];

console.log(elements.join());
// expected output: "Fire,Wind,Rain"

console.log(elements.join(''));
// expected output: "FireWindRain"

console.log(elements.join('-'));
// expected output: "Fire-Wind-Rain"
```