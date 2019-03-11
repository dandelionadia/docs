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

```js
var Man = function(name) {
	this.name = name;
	this.speak = true;
}
// створи новий object за допомогоб уонструктора Man
var me = new Man("Nadiia");
console.log(me);
console.log(me.name);
console.log(me.speak);
    
// Man {name: "Nadiia", speak: true}
//  Nadiia
// true
```

По замовчуванню функція конструктор повертає **return this**
але якщо ми повернемо інший обєкт то буде виводити його:


```js
var Man = function(name) {
	this.name = name;
	this.speak = true;
    return {name: "Artem"}
}
// створи новий object за допомогоб уонструктора Man
var me = new Man("Nadiia");
console.log(me);
console.log(me.name);
console.log(me.speak);
// {name: "Artem"}
// Artem
```

#### Можемо створювати методи

```js
this.say = function() {
	return "Hello! my name is " + this.name;
    }
```
```js
var Man = function(name) {
	this.name = name;
	this.speak = true;
        this.say = function() {
	    return "Hello! my name is " + this.name;
	}
}

var me = new Man("Nadiia");
console.log(me.say());
```

При вызове return с объектом, будет возвращён он, а не this.

#### Локальные переменные

```js
function User(firstName, lastName) {
  // вспомогательная переменная
  var phrase = "Привет";

  //  вспомогательная вложенная функция
  function getFullName() {
      return firstName + " " + lastName;
    }

  this.sayHi = function() {
    alert( phrase + ", " + getFullName() ); // использование
  };
}

var vasya = new User("Вася", "Петров");
vasya.sayHi(); // Привет, Вася Петров
```
**якщо помістимо в об'єкт**
```js
var Box = {
	Man: function(name) {
		this.name = name;
		this.spek = true;
	}
}

var me = new Box.Man('Hope')
console.log(me)
VM6454:9 Man {name: "Hope", spek: true}
```

#### перевірити де була створена змінна
```js
var Box = {
	Man: function(name) {
		this.name = name;
		this.spek = true;
	}
}

var me = new Box.Man('Hope')
console.log(me instanceof Box.Man)
true
```