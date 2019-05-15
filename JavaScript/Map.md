## Map
**`Объект Map`** содержит пары ключ-значение и сохраняет порядок вставки
```js
new Map([iterable])
```
**iterable** - 
Массив или любой другой итерируемый объект чьими элементами являются пары ключ-значение (массивы из двух элементов, например [[ 1, 'one' ],[ 2, 'two' ]]). 

### Сравнение Объектов и Map
* Ключами Объекта выступают Строки и Символы, в то время как любое значение может быть ключом Map, включая функции, объекты и примитивы.
* В отличие от Объектов, ключи в Map упорядочены. Таким образом, во время итерации Map, ключи возвращаются в порядке вставки.
* Вы легко можете получить количество элементов в Map с помощью свойства size, в то время как количество элементов Объекта может быть определено только вручную.
* Map - итерируемый объект и может быть итерирован напрямую, в то время как Объект требует ручного получения списка ключей и их итерации.

```js
var myMap = new Map();

var keyObj = {},
    keyFunc = function () {},
    keyString = "a string";

// задание значений
myMap.set(keyString, "value associated with 'a string'");
myMap.set(keyObj, "value associated with keyObj");
myMap.set(keyFunc, "value associated with keyFunc");

0: {"a string" => "value associated with 'a string'"}
key: "a string"
value: "value associated with 'a string'"
1: {Object => "value associated with keyObj"}
key: {}
value: "value associated with keyObj"
2: {function () {} => "value associated with keyFunc"}
key: ƒ ()
value: "value associated with keyFunc"
length: 3

// получение значений
myMap.get(keyString);    // "value associated with 'a string'"
myMap.get(keyObj);       // "value associated with keyObj"
myMap.get(keyFunc);      // "value associated with keyFunc"

myMap.get("a string");   // "value associated with 'a string'"
                         // потому что keyString === 'a string'
myMap.get({});           // undefined, потому что keyObj !== {}
myMap.get(function() {}) // undefined, потому что keyFunc !== function () {}
``` 
for
```js
var myMap = new Map();
myMap.set(0, 'zero');
myMap.set(1, 'one');
for (var [key, value] of myMap) {
  console.log(key + ' = ' + value);
}
// 0 = zero
// 1 = one

for (var key of myMap.keys()) {
  console.log(key);
}
// 0
// 1

for (var value of myMap.values()) {
  console.log(value);
}
// zero
// one

for (var [key, value] of myMap.entries()) {
  console.log(key + ' = ' + value);
}
// 0 = zero
// 1 = one
```
forEach
```js
myMap.forEach(function(value, key) {
  console.log(key + ' = ' + value);
});
// 0 = zero
// 1 = one
```
array
```js
var kvArray = [["key1", "value1"], ["key2", "value2"]];

// Используйте конструктор Map для преобразования двумерных массивов в Map
var myMap = new Map(kvArray);

myMap.get("key1"); // вернёт "value1"

// Используйте функцию Array.from для трансформации Map в двумерный key-value массив
console.log(Array.from(myMap)); // Выведет точно такой же массив как kvArray

// Или используйте итераторы  keys или values чтобы преобразовать ключи или значения в массивы
console.log(Array.from(myMap.keys())); // Выведет ["key1", "key2"]
```
