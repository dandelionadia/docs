## Сокращение для значений свойств
возможность писать только переменную, если имя переменной совпадает с именем свойства.
```js
const fullName = 'Zell Liew';
// ES6
const Zell = {
  fullName
}
// То, что выполняет ES6:
const Zell = {
  fullName: fullName
}
```
## Сокращения для методов
Сокращениями для методов в ES6 является то, что удаление : function из объявления метода не нарушает его работу:
```js
const anObject = {
  // ES6
  aShorthandMethod (arg1, arg2) {},
  // ES5
  aLonghandMethod: function (arg1, arg2) {},
}
```
```js
const obj = {
	name (i) {
	return i + i
	}
}
console.log(obj.name(2))  //4
```
## Вычисляемые имена свойств объектов

```js
const newPropertyName = 'smile'

const obj = {
name: 'name',
[newPropertyName]: ':)',
['bigger ' + newPropertyName]: 'XD'
}
console.log(obj)  // {name: "name", smile: ":)", bigger smile: "XD"}
```
## Шаблонные строки
```js
function announcePlayer (firstName, lastName, teamName) {
  console.log(firstName + ' ' + lastName + ', ' + teamName);
}
```
Для создания шаблонного литерала необходимо обернуть строки в обратные апострофы **``**. Внутри обратных апострофов используется специальный указатель **${}**, в котором можно писать JavaScript код.


```js
const firstName = 'Zell';
const lastName = 'Liew';
const teamName = 'unaffiliated';
const theString = `${firstName} ${lastName}, ${teamName}`;
console.log(theString);
// Zell Liew, unaffiliated
```