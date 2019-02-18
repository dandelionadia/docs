## Прототипы
```js
var empty = {};
console.log(empty.toString);
// → function toString(){…}
console.log(empty.toString());
// → [object Object]
```
Великий предок всех объектов, **Object.prototype**.
```js
console.log(Object.getPrototypeOf({}) == Object.prototype);
// → true
console.log(Object.getPrototypeOf(Object.prototype));
// → null
```
Функция **Object.getPrototypeOf** возвращает прототип объекта. Он
предоставляет несколько методов, которые появляются у
всех объектов. Например, **toString**, который преобразует
объект в строковый вид.

Функции происходят от **Function.prototype**, массивы – от
**Array.prototype**. 

Функция **Object.getPrototypeOf** возвращает прототип объекта. Можно использовать **Object.create** для создания
объектов с заданным прототипом.
```js
var protoRabbit = {
speak: function(line) {
console.log("А " + this.type + " кролик говорит '" + line +
}
};
var killerRabbit = Object.create(protoRabbit);
killerRabbit.type = "убийственный";
killerRabbit.speak("ХРЯЯЯСЬ!");
// → А убийственный кролик говорит 'ХРЯЯЯСЬ!'
```
