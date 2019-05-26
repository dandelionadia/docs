## JSON
**(JSON)** - стандартный текстовый формат для представления структурированных данных на основе синтаксиса объекта JavaScript. 

**MethodsSection**

`JSON.parse()`
Parse a string as JSON, optionally transform the produced value and its properties, and return the value.

`JSON.stringify()`
Return a JSON string corresponding to the specified value, optionally including only certain properties or replacing property values in a user-defined manner.

* JSON - это чисто формат данных - он содержит только свойства, а не методы.
* JSON требует двойных кавычек, которые будут использоваться вокруг строк и имен свойств. Одиночные кавычки недействительны.
* JSON может фактически принимать форму любого типа данных, который действителен для включения внутри JSON, а не только массивов или объектов. 

```js
superHeroes['members'][1]['powers'][2]
```
Сначала у нас есть имя переменной - `superHeroes`.

Внутри мы хотим получить доступ к свойству `members`, поэтому мы используем `['members']`.

`members` содержат массив, заполненный объектами. Мы хотим получить доступ ко второму объекту внутри массива, поэтому мы используем `[1]`.

Внутри этого объекта мы хотим получить доступ к свойству `powers`, поэтому мы используем `['powers']`.

Внутри свойства powers находится массив, содержащий сверхспособности выбранного героя. Нам нужен третий, поэтому мы используем `[2]`.

```json
[
  {
    "name": "Molecule Man",
    "age": 29,
    "secretIdentity": "Dan Jukes",
    "powers": [
      "Radiation resistance",
      "Turning tiny",
      "Radiation blast"
    ]
  },
  {
    "name": "Madame Uppercut",
    "age": 39,
    "secretIdentity": "Jane Wilson",
    "powers": [
      "Million tonne punch",
      "Damage resistance",
      "Superhuman reflexes"
    ]
  }
]
```
 Вам просто нужно получить доступ к элементам массива (в его анализируемой версии), начиная с индекса массива, например `[0]["powers"][0]`.