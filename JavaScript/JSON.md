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