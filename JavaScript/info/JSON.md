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
