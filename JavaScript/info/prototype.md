Прототипи - це об'єкт від якого інші об'єкти унаслідують свої властивості.

Резервне зберігання властивостей і використовується лише при читанні.

Прототипне наслідування
```js
var obj = {
    name: "No"
}

var Foo = function() {
    this.name = 'OK';
}

var b = new Foo()
console.log(b)
//  Foo {name: "OK"}
```

**Прототип** – это ещё один объект, который используется
как запасной источник свойств. Когда объект получает
запрос на свойство, которого у него нет, это свойство
ищется у его прототипа, затем у прототипа прототипа, и т.
д.

```js
console.log(Object.getPrototypeOf({}) == Object.prototype);
// → true
console.log(Object.getPrototypeOf(Object.prototype));
// → null
```

Прототипические отношения в JavaScript выглядят как
дерево, в корне которого находится Object.prototype. Он
предоставляет несколько методов, которые появляются у
всех объектов. Например, toString, который преобразует
объект в строковый вид.

* Функции происходят от Function.prototype
*  массивы – от Array.prototype.
```js
console.log(Object.getPrototypeOf(isNaN) == Function.prototype);
// → true
console.log(Object.getPrototypeOf([]) == Array.prototype);
// → true
```
Функция **Object.getPrototypeOf** возвращает прототип
объекта. Можно использовать **Object.create** для создания
объектов с заданным прототипом.

```js
var protoRabbit = {
speak: function(line) {
console.log("А " + this.type + " кролик говорит '" + line + "' " );
    }
};
var killerRabbit = Object.create(protoRabbit);
killerRabbit.type = "убийственный";
killerRabbit.speak("ХРЯЯЯСЬ!");
// А убийственный кролик говорит 'ХРЯЯЯСЬ!' 
```