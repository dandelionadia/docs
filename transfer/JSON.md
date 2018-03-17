**JSON** (англ. JavaScript Object Notation) — це текстовий формат обміну даними між комп'ютерами

 Если нужно с сервера взять объект с данными и передать его клиенту, то в качестве промежуточного формата – для передачи по сети, почти всегда используют именно его.

 ### Данные в формате JSON представляют собой:
 * JavaScript-объекты { ... } ,
 * Массивы [ ... ],
 * строки в двойных кавычках,
 * логическое значение true/false,
 * числа,
 * null

 ### Основные методы для работы с JSON в JavaScript – это:
 * JSON.parse – читает объекты/масив/число.. из строки в формате JSON.
 * JSON.stringify – превращает объекты в строку в формате JSON, используется, когда нужно из JavaScript передать данные по сети.

 **Приклад №1**
 ```js
 var numbers = "[0, 1, 2, 3]";
/*перетворює рядок в масив */
numbers = JSON.parse(numbers);
/*і вже з масива ми запрошуємо певний елемент*/
alert( numbers[1] ); // 1
```
 **Приклад №2**
```js
var user = '{ "name": "Вася", "age": 35, "isAdmin": false, "friends": [0,1,2,3] }';

user = JSON.parse(user);

alert( user.friends[1] ); // 1
```

## JSON.parse(str, reviver)
 **Приклад №1**
```js
// title: название события, date: дата события
var str = '{"title":"Конференция","date":"2014-11-30T12:00:00.000Z"}';
var event = JSON.parse(str, function(key, value) {
  if (key == 'date') return new Date(value);
  return value;
});

alert( event.date.getDate() );
```
 **Приклад №2**
```js
var schedule = '{ \
  "events": [ \
    {"title":"Конференция","date":"2014-11-30T12:00:00.000Z"}, \
    {"title":"День рождения","date":"2015-04-18T12:00:00.000Z"} \
  ]\
}';

schedule = JSON.parse(schedule, function(key, value) {
  if (key == 'date') return new Date(value);
  return value;
});

alert( schedule.events[1].date.getDate() ); // сработает!
```
##  JSON.stringify
 **Приклад №1**
```js
var event = {
  title: "Конференция",
  date: "сегодня"
};

var str = JSON.stringify(event);
alert( str ); // {"title":"Конференция","date":"сегодня"}

// Обратное преобразование.
event = JSON.parse(str);
```
 **Приклад №2**
```js
var room = {
  number: 23,
  occupy: function() {
    alert( this.number );
  }
};

var event = {
  title: "Конференция",
  date: new Date(Date.UTC(2014, 0, 1)),
  room: room
};

alert( JSON.stringify(event) );
/*
  {
    "title":"Конференция",
    "date":"2014-01-01T00:00:00.000Z",  // (1)
    "room": {"number":23}               // (2)
  }
*/
```
 **Приклад №3**
```js
var user = {
  name: "Вася",
  age: 25,
  window: window
};

var str = JSON.stringify(user, function(key, value) {
  if (key == 'window') return undefined;
  return value;
});

alert( str ); // {"name":"Вася","age":25}
```
 **Приклад №4**
```js
var user = {
  name: "Вася",
  age: 25,
  roles: {
    isAdmin: false,
    isEditor: true
  }
};

var str = JSON.stringify(user, "", 4);

alert( str );
/* Результат -- красиво сериализованный объект:
{
    "name": "Вася",
    "age": 25,
    "roles": {
        "isAdmin": false,
        "isEditor": true
    }
}
*/
```