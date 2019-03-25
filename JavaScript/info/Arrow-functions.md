## Стрелочные функции
```js
let array = [1,7,98,5,4,2];
// ES5 вариант
var moreThan20 = array.filter(function (num) {
  return num > 20;
});
// ES6 вариант
let moreThan20 = array.filter(num => num > 20);
```
Важно отметить, что стрелочные функции анонимны.

Эта анонимность создает некоторые проблемы:

1. Сложнее отлаживать
Когда вы получите сообщение об ошибке, вы не сможете отследить имя функции или точный номер строки, где она произошла.

2. Нет самопривязки

Если ваша функция должна ссылаться на саму себя в любой момент (например, рекурсия, обработчик событий, который необходимо отменить), это не сработает.

Стрелочные функции лучше всего подходят когда требуется от this привязка к контексту, а не к самой функции.

**this** — уникальное ключевое слово, значение которого меняется в зависимости от контекста вызова. При вызове снаружи функции this ссылается на объект Window в браузере.

```js
console.log(this); // Window
```
* При вызове this в методе объекта, оно ссылается на сам объект:

```js
let o = {
  sayThis: function() {
    console.log(this);
  }
}
o.sayThis(); // o
```

* При использовании в обработчике события this ссылается на элемент, который запустил событие
```js
    let button = document.querySelector('button');
button.addEventListener('click', function() {
  console.log(this); // button
});
```
*В стрелочных функциях this никогда не приобретает новое значение вне зависимости от того, как функция вызвана. this всегда будет иметь такое же значение, какое имеет this в окружающем стрелочную функцию коде.*
