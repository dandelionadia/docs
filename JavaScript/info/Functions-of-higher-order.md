**Функция высшего порядка** — это функция, которая может принимать другую функцию в качестве аргумента или возвращать другую функцию в качестве результата.

**callback** — Функция обратного вызова — функция, которая выполняется в конце операции, когда все остальные операции уже завершены. Как правило, функция обратного вызова передается в качестве последнего аргумента функции. Часто функцию обратного вызова определяют как анонимную функцию.

## Filter

 фільтер викликає колбек і повертає елемент у новий масив лише тоді, коли цей елемент задовільняє умову
```js
var ancestry = [
{"name": "Emma de Milliano", "sex": "f",
"born": 1876, "died": 1956,
"father": "Petrus de Milliano",
"mother": "Sophia van Damme"},
{"name": "Carolus Haverbeke", "sex": "m",
"born": 1832, "died": 1905,
"father": "Carel Haverbeke",
"mother": "Maria van Brussel"}
]

var result = ancestry.filter(function(person) {
return person.born > 1800 && person.born < 1870;
})

console.log(result)

//[{"name": "Carolus Haverbeke", "sex": "m",
//"born": 1832, "died": 1905,
//"father": "Carel Haverbeke",
//"mother": "Maria van Brussel"}]
```

```js
var words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);

console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]
```

## Map
 відбувається callback для кожного елемента і результат записується у новий масив

```js
var ancestry = [
{"name": "Emma de Milliano", "sex": "f",
"born": 1876, "died": 1956,
"father": "Petrus de Milliano",
"mother": "Sophia van Damme"},
{"name": "Carolus Haverbeke", "sex": "m",
"born": 1832, "died": 1935,
"father": "Carel Haverbeke",
"mother": "Maria van Brussel"}
]

var box = ancestry.filter(function(person){
return person.died - person.born > 90
})

var names = box.map(function(person) {
return person.name
})

console.log(names) // ["Carolus Haverbeke"]
```

поиск человека с самой ранней датой рождения:
```js
var min = ancestry[0]

for (var i = 1; i < ancestry.length; i++) {
 var cur = ancestry[i]
 if (cur.born < min.born) {
   min = cur
 }
}

console.log(min)  //{name: "Carolus Haverbeke", sex: "m", born: 1832, died: 1905, father: "Carel Haverbeke", …}
```

код, находящий средний возраст мужчин и женщин в наборе:
```js
function average(array) {
function plus(a, b) { return a + b; }
return array.reduce(plus) / array.length;
}
function age(p) { return p.died - p.born; }
function male(p) { return p.sex == "m"; }
function female(p) { return p.sex == "f"; }
console.log(average(ancestry.filter(male).map(age)));
console.log(average(ancestry.filter(female).map(age)));
// 73
// 80
```

```js
obj.foo = “bar”

коли хочемо поставити значення ключа “фу”

але якщо ми не знаємо яке буде ім”я ключа то:

function setKey(key) {
  obj[key] = “bar”
}
setKey(‘foo”) // { foo: ‘bar’ }
setKey(‘john’) // { john: ‘bar’ }
```

```js
var byName = {};
ancestry.forEach(function(person) {
byName[person.name] = person;
});
console.log(byName["Philibert Haverbeke"]);
// →"Philibert Haverbeke":  {name: "Philibert Haverbeke", …}
```

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