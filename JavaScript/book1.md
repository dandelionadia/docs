
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
* **push** (добавляют и отнимают элементы в конце массива)
* **join** (Массив строк можно сплющить в одну строку при помощи метода join. В
качестве аргумента join передают строку, которая будет
вставлена между элементами массива.)
* **pop** (добавляют и отнимают элементы в конце массива)
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

* **unshift и shift** (добавляют иотнимают элементы в  начале массива)
```js
var todoList = [];
function rememberTo(task) {
todoList.push(task);
}
function whatIsNext() {
return todoList.shift();
}
function urgentlyRememberTo(task) {
todoList.unshift(task);
}
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