
* **toLowerCase** (нижній регістр)
* **toUpperCase** (верзній регістр)
```js
var doh = "Дык";
//  визначає тип функції toUpperCase по відношенню до doh 
console.log(typeof doh.toUpperCase);
// → function
// викликається функція toUpperCase
console.log(doh.toUpperCase());
// → ДЫК
```
* **push** (добавляют элементы в конце массива)
* **join** (Массив строк можно сплющить в одну строку при помощи метода join. В
качестве аргумента join передают строку, которая будет
вставлена между элементами массива.)
* **pop** (отнимают элементы в конце массива)
```js
var mack = [];
mack.push("Трест,");
mack.push("который", "лопнул");
console.log(mack);
// → ["Трест,", "который", "лопнул"]
console.log(mack.join(" "));
// → Трест, который лопнул
console.log(mack.pop());
// → лопнул
console.log(mack);
// → ["Трест,", "который"]
```
* **in** (есть ли у объекта свойство с таким именем)
```js
var anObject = {left: 1, right: 2};
console.log(anObject.left);
// → 1
delete anObject.left;
console.log(anObject.left);
// → undefined
console.log("left" in anObject);
// → false
console.log("right" in anObject);
// → true
```

#### Получается, что массивы – это разновидность объектов, которые специализируются на хранении последовательностей. Выражение typeof [1, 2] вернёт “object”.
```js
var box = ['a', 'b', 'c'];
var box = {
    0: 'a',
    1: 'b',
    2: 'c'
}
```

* **object**
```js 
var object1 = {value: 10};
var object2 = object1;
var object3 = {value: 10};
console.log(object1 == object2);
// → true
console.log(object1 == object3);
// → false
object1.value = 15;
console.log(object2.value);
// → 15
console.log(object3.value);
// → 10
```
Оператор == при сравнении объектов возвращает true
только, если сравниваемые объекты – это одна и та же
переменная. Сравнение разных объектов вернёт false,
даже если у них идентичное содержимое.

```js
var map = {
  name: "Tom",
  surname: "Radle"
}

console.log(map.name);
// Tom
console.log(map["surname"]);
// Radle

function a (index) {
    // повертає значення ключя 
  return map[index];
}
console.log(a("surname"));
// Radle
```
* **for in**
```js
for (var event in map)
console.log("Кореляция для '" + event +
"' получается " + map[event]);
// → Кореляция для 'пицца' получается 0.069
// → Кореляция для 'тронул дерево' получается -0.081
```

* **unshift** (добавляют элементы в  начале массива)

```js
const arr = ['a', 'b', 'c']
arr.unshift('d') // ['d', 'a', 'b', 'c']
```

* **shift** (removes *the first* element from an array)
```js
var todoList = ['a', 'b', 'c'];
todoList.shift() // ['b', 'c']
```
* У метода **indexOf** есть родственник по имени **lastIndexOf**,
который начинает поиск элемента в массиве с конца
```js
console.log([1, 2, 3, 2, 1].indexOf(2));
// → 1
console.log([1, 2, 3, 2, 1].lastIndexOf(2));
// → 3
```

*Оба метода, indexOf и lastIndexOf, принимают
необязательный второй аргумент, который задаёт
начальную позицию поиска.*

* **slice** (который принимает
номера начального (start) и конечного (end) элементов, и
возвращает массив, состоящий только из элементов,
попадающих в этот промежуток. Включая тот, что
находится по индексу start, но исключая тот, что по
индексу end.)
```js
console.log([0, 1, 2, 3, 4].slice(2, 4));
// → [2, 3]
console.log([0, 1, 2, 3, 4].slice(2));
// → [2, 3, 4]
```
* **concat** (используется для склейки массивов)

* **slice**
* **indexOf**
```js
console.log("кокосы".slice(3, 6));
// → осы
console.log("кокос".indexOf("с"));
// → 4
```
*Разница в том, что у строки метод indexOf может принять
строку, содержащую больше одного символа, а у
массивов такой метод работает только с одним
элементом.*

* **trim** (удаляет пробелы)
```js
console.log(" ладно \n ".trim());
// → ладно
```

* **charAt**
```js
var string = "abc";
console.log(string.length);
// → 3
console.log(string.charAt(0));
// → a
console.log(string[1]);
// → b
```

* **arguments** (Она указывает на объект, содержащий все аргументы, переданные функции.)
```js
function addEntry(squirrel) {
var entry = {events: [], squirrel: squirrel};
for (var i = 1; i < arguments.length; i++)
entry.events.push(arguments[i]);
journal.push(entry);
}
addEntry(true, "работа", "тронул дерево", "пицца",
```
* **Math.max** (максимум)
* **Math.min** (минимум)
* **Math.sqrt** (квадратный корень)
* **reverse** (меняющий порядок элементов в массиве на обратный)

* 1 **concat** 
```js
var a = [1,2,3];
var b = [4,5,6];
var foo = ['foo'];

var c = a.concat(b, foo);
console.log(c);
//[1, 2, 3, 4, 5, 6, "foo"]
```

* 2 **map**
```js
var numbs = [1,2,3,4];
var newnumbs = numbs.map(function(num) {
  return num * 2;
})

console.log(newnumbs);
 // [2, 4, 6, 8]

var b = numbs.map(function(num) {
  return num % 2 === 0;
})

console.log(b);
// [false, true, false, true]
```

* 3 **slice**
```js
var animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
console.log(animals.slice(1, 3));
// ["bison", "camel"]
```       
* 4 **filter**
```js
var words = ['spa', 'limi', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter((word) => word.length > 4);
console.log(result);
// ["elite", "exuberant", "destruction", "present"]
```
* 5 **includes**
```js
var numbs = [1,2,3,4];
console.log(numbs.includes(8));
// false
```
* 6 **forEch**
```js
const items = ['item1', 'item2', 'item3'];
const copy = [];

items.forEach(function(item){
  copy.push(item);
})
console.log(copy);
 // ["item1", "item2", "item3"]
```
* 7 **reduce**
```js
const array = [1,2,3,4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;
console.log(array.reduce(reducer, 2));

// 1 + 2 + 3 + 4
console.log(array.reduce(reducer));
// expected output: 10

// 5 + 1 + 2 + 3 + 4
console.log(array.reduce(reducer, 5));
// expected output: 15
```
* 8 **some**
```js
const arr = [1,10,11,23,5,4];
const largeNumbs = arr.some((numb) => numb > 5);
console.log(largeNumbs);
// true
```
* 9 **every**
```js
const array2 = [1,5,7,9,11];
const greaterNumb = array2.every((numb) => numb > 3);
console.log(greaterNumb);
// false
```
* 10 **sort**
```js
const arraynum = [1,5,2,4,3];
arraynum.sort((a,b) => a - b);
console.log(arraynum);
// [1, 2, 3, 4, 5]

// 
const arr2 = [1, 2, 3, 4, 5, 6];
  const alpha = ['e', 'a', 'c', 'u', 'y'];

  // sort in descending order
  descOrder = arr2.sort(function(a, b) {
    // console.log(a,b);
    return a > b ? -1 : 1;
  });
  console.log(descOrder); 
  // [6, 5, 4, 3, 2, 1]
  ascOrder = alpha.sort((a, b) => a > b ? 1 : -1);
  console.log(ascOrder);
  // ["a", "c", "e", "u", "y"]
```
* 11 **of**
```js
const nums = Array.of(1, 2, 3, 4, 5, 6);
console.log(nums);
// [1, 2, 3, 4, 5, 6]
```
* 12 **from**
```js
  const name = 'frugence';
  const nameArray = Array.from(name);

  console.log(name); 
  // frugence
  console.log(nameArray);
  // ["f", "r", "u", "g", "e", "n", "c", "e"]
  ```