#### Лексическая область видимости

```js
function init() {
  var name = "Mozilla"; // name - локальная переменная, созданная в init
  function displayName() {
    // displayName() - внутренняя функция, замыкание
    alert(name); // displayName() использует переменную, объявленную в родительской функции
  }
  displayName();
}
init();
```

`alert()` внутри displayName() благополучно выводит на экран содержимое переменной name объявленной в родительской функции. Это пример так называемой **лексической области видимости** (lexical scoping): в JavaScript область действия переменной определяется по её расположению в коде, и вложенные функции имеют доступ к переменным, объявленным вовне. Этот механизм и называется `Lexical scoping` (область действия, ограниченная лексически).

#### Замыкание

```js
function makeAdder(x) {
  return function(y) {
    return x + y;
  };
}

var add5 = makeAdder(5);
var add10 = makeAdder(10);

console.log(add5(2)); // 7
console.log(add10(2)); // 12
```

2

```js
const add = x => y => x + y;

const addFive = add(5);
// const addFive = (y) => 5 + y

addFive(2); // 7
```

#### Замыкания на практике

```scss
body {
  font-family: Helvetica, Arial, sans-serif;
  font-size: 12px;
}

h1 {
  font-size: 1.5em;
}

h2 {
  font-size: 1.2em;
}
```

```js
function makeSizer(size) {
  return function() {
    document.body.style.fontSize = size + 'px';
  };
};

var size12 = makeSizer(12);
var size14 = makeSizer(14);
var size16 = makeSizer(16);

document.getElementById('size-12').onclick = size12;
document.getElementById('size-14').onclick = size14;
document.getElementById('size-16').onclick = size16;

<a href="#" id="size-12">12</a>
<a href="#" id="size-14">14</a>
<a href="#" id="size-16">16</a>
```
