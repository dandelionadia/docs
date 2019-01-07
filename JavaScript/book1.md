
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
* **push**
* **join** (Массив строк можно сплющить в одну строку при помощи метода join. В
качестве аргумента join передают строку, которая будет
вставлена между элементами массива.)
* **pop**
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

