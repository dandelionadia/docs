## classList
```html
<div id="clock" class="example for you"> </div>
```
```js
var elem = document.querySelector("#clock")

//Выведем классы
console.log(elem.classList);
 //DOMTokenList ["example", "for", "you"]

//Добавим классы
elem.classList.add("ok", "understand");
console.log(elem.classList);
 //DOMTokenList ["example", "for", "you", "ok", "understand"]

//Переключим классы
elem.classList.toggle("you");
elem.classList.toggle("he");
console.log(elem.classList); 
//DOMTokenList ["example", "for", "ok", "understand", "he"]

//Проверим класс
console.log(elem.classList.contains("example")); //true
console.log(elem.classList.contains("lol")); //false

//И удалим классы
elem.classList.remove("example", "for", "understand", "he");
console.log(elem.classList); //DOMTokenList ["ok"]
```