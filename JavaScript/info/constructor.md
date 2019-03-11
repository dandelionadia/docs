## Constructor

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
//  Man {name: "Hope", spek: true}
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

### відмінності 
```js
function Student(name) {
    this.name = name
}

Student.prototype.speak = function () { return 'word' }

const billy = new Student('Billy')
billy.speak()

const willy = new Student('willy')
willy.speak() 

console.log(billy, willy)

//

function speak() { return 'hello!' }

function createStudent(info) {
    return {
        name: info.name, // name: "Billy"
        surname: info.surname,
        speak: speak,
    }
}

var billy = createStudent({ name: 'Billy', surname: 'Doe' })

```