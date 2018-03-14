*  **toggleClass()**

Якщо у елемента уже є клас то він видаляється,якщо немає то він додається.
```html
    <div id="div1" class="someDiv"></div>
    <div id="div2" class="someDiv"></div>
    <div id="div3" class="someDiv"></div>
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
  <img class="img" src="" alt="foto">
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
    <img class="foto" src="" alt="foto">
    <div class="button">button</div>
  </div>
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
      <li class="box__list"><a class="box__list_link" href="" target="_blank">Youtube</a></li>
      <li class="box__list"><a class="box__list_link" href="" target="_blank">Youtube</a></li>
      <li class="box__list"><a class="box__list_link" href="" target="_blank">Youtube</a></li>
      <li class="box__list"><a class="box__list_link" href="" target="_blank">Youtube</a></li>
      <li class="box__list"><a class="box__list_link" href="" target="_blank">Youtube</a></li>
      <li class="box__list"><a class="box__list_link" href="" target="_blank">Youtube</a></li>
    </ul>
  </nav>
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

## Якорь дж
```html
  <div class="box">

    <div class="link">
      <a class="pozition" href="#title1">Title 1</a>
      <a class="pozition" href="#title2">Title 2</a>
    </div>
  
    <div class="text">
      <a class="title" id="title1">Tile 1</a>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    
      <a class="title" id="title2">Tile 2</a>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    </div>
  </div>
```
```js
$(document).ready(function() {
  $('.pozition').click(function() {
    // повертає значення обраного елемента
      var id  = $(this).attr('href'),
      // відступ елемента по відношенню до дкумента
      top = $(id).offset().top;
      // анімація зі швидкість
    $('html').animate({ scrollTop: top }, 1200);
  })
})

```