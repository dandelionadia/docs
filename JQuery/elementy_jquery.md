*  **toggleClass()**

Якщо у елемента уже є клас то він видаляється,якщо немає то він додається.
```html
    <div id="div1" class="someDiv"></div>
    <div id="div2" class="someDiv"></div>
    <div id="div3" class="someDiv"></div>


    <script src="./jquery-3.3.1.js"></script>
    <script src="./jquery.js"></script>
```
```css
#div1 {
  background-color: rgb(184, 25, 25);
}

#div2 {
  background-color: rgb(245, 232, 47);
}

#div3 {
  background-color: rgb(136, 136, 218);
}

.someDiv {
  width: 100px;
  height: 100px;
  display: inline-block;
  transition: all .5s;
}

.someDiv2 {
  width: 200px;
  height: 200px;
}
```
```js
$(document).ready(function() {
  $(".someDiv").on("click", function() {
    $(this).toggleClass("someDiv2");
  });
});
```

*  **toggle()**

Переключає відображення або приховування елементів.Якщо прихований то покаже ,якщо видимий то приховає.
```html
  <body>
  <img class="img" src="http://www.lechim-prosto.ru/wp-content/uploads/2016/10/Ehinatseya-foto-i-opisanie-rasteniya.jpg" alt="foto">
  <button>KLICK</button>
```
```js
$(document).ready(function() {
  $('button').on('click', function() {
    console.log('gg');
    $('img').toggle();
  })
})
```



* метод **hiden()**
  
 без параметрів ,просто скриває елементи:
 
* метод **hiden(text)**

 з параметрами, стає методом анімації.

 ```html
   <div>
    <img class="foto" src="https://media.gettyimages.com/photos/dogs-and-cats-snuggle-together-picture-id577960242" alt="foto">
    <div class="button">button</div>
  </div>
  ```
  ```css
  .button {
  background-color: aqua;
  border-radius: 4px;
  width: 60px;
  height: 30px;
  text-align: center;
  line-height: 30px;
}

.foto {
  width: 400px;
}
```
```js
$(document).ready(function() {
  $('.button').click (function() {
    $('.foto').hide(2000);
  })
})
```
*  **mouseover** 

наведение курсора на элемент
  
*  **mouseout**

  вывод курсора из элемента

```html
  <nav>
    <ul class="box">
      <li class="box__list"><a class="box__list_link" href="https://www.youtube.com/feed/subscriptions" target="_blank">Youtube</a></li>
      <li class="box__list"><a class="box__list_link" href="https://www.youtube.com/feed/subscriptions" target="_blank">Youtube</a></li>
      <li class="box__list"><a class="box__list_link" href="https://www.youtube.com/feed/subscriptions" target="_blank">Youtube</a></li>
      <li class="box__list"><a class="box__list_link" href="https://www.youtube.com/feed/subscriptions" target="_blank">Youtube</a></li>
      <li class="box__list"><a class="box__list_link" href="https://www.youtube.com/feed/subscriptions" target="_blank">Youtube</a></li>
      <li class="box__list"><a class="box__list_link" href="https://www.youtube.com/feed/subscriptions" target="_blank">Youtube</a></li>
    </ul>
  </nav>

  <script src="./jquery-3.3.1.js"></script>
  <script src="./do.js"></script>

```
```css
.box {
  background-color: rgb(176, 208, 248);
  width: 600px;
  margin: auto;
  padding: 10px;
  display: flex;
  justify-content: space-between;
}

.box__list {
  list-style-type: none;
  display: inline;
}

.box__list_link {
  color: #6b6a64;
  text-decoration: none;
}

.color .box__list_link {
  color: rgb(247, 16, 16);
}
```
```js
$(document).ready(function() {
  $('.box').on('mouseover', '.box__list', function() {
    $(this).addClass('color');
  })
  $('.box').on('mouseout', '.box__list', function() {
    $(this).removeClass('color');
  })
});
```