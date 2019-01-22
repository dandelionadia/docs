## JSON 
что означает JavaScript Object Notation (разметка объектов JavaScript).

Все имена
свойств должны быть заключены в двойные кавычки

JavaScript предоставляет функции **JSON.stringify** и
**JSON.parse**, которые преобразовывают данные из этого
формата и в этот формат. Первая принимает значение и
возвращает строчку с JSON. Вторая принимает такую
строчку и возвращает значение.
```js
var string = JSON.stringify({name: "X", born: 1980});
console.log(string);
// → {"name":"X","born":1980}
console.log(JSON.parse(string).born);
// → 1980
```
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