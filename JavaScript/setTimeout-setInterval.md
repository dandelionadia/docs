## setTimeout

```js
var timerId = setTimeout(func / code, delay[, arg1, arg2...])
```
* **func/code** - функция для исполнения.
* **delay** - Задержка в миллисекундах, 1000 миллисекунд равны 1 секунде.
* **arg1, arg2…** - Аргументы, которые нужно передать функции. 
```js
function func() {
  alert( 'Привет' );
}

setTimeout(func, 1000);
```
```js
function func(phrase, who) {
  alert( phrase + ', ' + who );
}

setTimeout(func, 1000, "Привет", "Вася"); // Привет, Вася
```
анонимные функции:
```js
 setTimeout(function() { alert('Привет') }, 1000);
 ```
 ## clearTimeout
 ```js
 var timerId = setTimeout(...);
clearTimeout(timerId);
```
```js
var timerId = setTimeout(function() { alert(1) }, 1000);
alert(timerId); // число - идентификатор таймера

clearTimeout(timerId);
alert(timerId); // всё ещё число, оно не обнуляется после отмены
```