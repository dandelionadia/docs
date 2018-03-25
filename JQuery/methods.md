 * `addClass()`- додавати класи.

 * `removeClass()` - видалення класу.
  ```js
  $(document).ready(function(){
    $('#first').on('click',firstButtonHandler);
    $('#second').on('click',secondButtonHandler);
    // дів з текстом
    var div = $('#testDiv');

    function firstButtonHandler() {
      div.removeClass();
      div.addClass('class1');
    }
  })
  ```
  * `.hasClass(className):boolean` - Проверяет наличие класса className у выбранных элементов страницы. 
Если хотя бы один из элементов содержит этот класс, то функция вернет true, иначе вернет false.
  * `attr()` функція призначена щоб отримати доступ до атрибута первого елемента виборки.                             
 *Повертає або змінює значення атрибута у вибраних елементів на сторінці.*
    * **attr(attrNаme)** повертає значення *attrNAme* у вибраного елемета.Если выбрано несколько элементов, то значение будет взято у первого.
      Если элемент не имеет атрибута с таким именем, будет возвращено undefined.
    * **attr(attrNаme.value)** атрибуту *attrNAme*  буде присвоєне значення *value* у всіх обраних елементах.
    * **attr({attrName1:value1,attrName2:value2})** групі атрибутів *attrName1,attrName2* будуть присвоєні значення *value1,value2* у всіх вибраних елементах.
    * функція **attr(attrNAme,function(index,value))**.
    Атрибуту *attrNAme* буде присвоєне значення повернуте функцією.*index* -позиція елемента , *value* - значення.

  >Заміняємо картинку `auto` на `moto`.
   ```html
    <div>
      <img src="auto.jpg">
    </div>
    <img src="moto.jpg">
   ```
   ```javascript
    $("#pop img").attr("src", "moto.jpg");
   ```
   ```js
   // вернет имя класса у первого div-элемента на странице
$("div").attr("class");
// класс всех div-элементов на странице станет равным divEl
$("div").attr("class", "divEl");    
// класс div-элементов станет равен divEl, а title — "Див"
$("div").attr({"class":"divEl", "title":"Див"});    
// вернет подсказку элемента с классом rool. 
// Если таких элементов на странице несколько — вернет первого из них.
$(".rool").attr("title");
```
   * `removeAttr()` функція для видалення атрибута із елемента.
  В этом примере у элемента input изначально присутствует атрибут disabled со значением disabled.

```js
$("#button_on").click(function () {
    $('input')
    .removeAttr("disabled")
    .focus()
    .val("Можно редактировать!");
    return false;
});
$("#button_off").click(function () {
    $('input')
    .attr("disabled","disabled")
    .focus()
    .val("Нельзя редактировать!");
   return false;
});
```
   * `.hasClass()` - Позволяет определить, имеется ли класс с указанным именем хотя бы у одного элемента в наборе jQuery.

   * `.val(newVal)` - Атрибуту value будет присвоено значение newVal, у всех выбранных элементов.
   ```js
   // вернет значение элемента с идентификатором surname
$("#surname").val();    
// вернет значение первого элемента с классом surname
$(".surname").val();    
// вернет значение первого элемента формы с атрибутом name равным surname
$("input[name='surname']").val();
// присвоит значение "Задерищенко" всем элементам формы с классом surname   
$(".surname").val("Задерищенко");
```
* `toggle()`
>Переключає відображення або приховування елементів.Якщо прихований то покаже ,якщо видимий то приховає.

* `toggleClass()`
>Якщо у елемента уже є клас то він видаляється,якщо немає то він додається.

```js
$(document).ready(function() {
 $(".btn-slide").click(function(){
		$("#panel").slideToggle("slow");
		$(this).toggleClass("active");
    return false;
	});
})
```
```html
<body>
  <div id="panel">text</div>
  <p class="slide"><a href="#" class="btn-slide">Slide Panel</a></p>
</body>
```
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

https://codepen.io/ridko/pen/VXmLxd

* `slideToggle()`
>відображення або скривання елементів із сзользящим рухом.
```js
$('.list').click(function() {
  $(this).children('.text').slideToggle('slow');
})
```
```html
<naw>
  <ul class="box">
    <li class="list" >
      <a class="link" href="#">list text </a>
      <p class="text">lorem loorem lorem lorem </p>
    </li>
    <li class="list" >
      <a class="link" href="#">list list text</a>
      <p class="text">lorem  lorem lorem lorem </p>
    </li>
  </ul>
</naw>
```
```css
.box {
  background-color: red;
  width: 200px;
  margin: auto;
  padding: 0;
}

.list {
 list-style: none;
  margin-left: 0;
  padding: 0;
  border-bottom: 1px solid black; 
}

.link {
  text-decoration: none;
  color: white;
  /* силка стає на весь ядок і можна задати відступи,а так вона займає місце скільки й текст */
  display: block;
  padding: 10px; 
}

.text {
  background-color: yellow;
  padding: 10px;
  margin: 0;
  display: none;
}
```
* `.after()`
Вставляет заданное содержимое, либо перемещает указанные элементы, вставляя их после каждого элемента набора jQuery.
```js 
// Переместить заголовок <h1>, вставив его после 
// элемента с id='general'.

$('#general').after($('h1'));
```
* `.before()`
Вставляет заданное содержимое, либо перемещает указанные элементы, вставляя их перед каждым элементом набора jQuery.
```js
// Переместить заголовок <h1>, вставив его перед 
// элементом с id='general'.

$('#general').before($('h1'));
```

* `.append()`
Добавляет или перемещает содержимое, определяемое во входном параметре, в конец содержимого каждого элемента набора jQuery.
```html
<h2>Функция jQuery <b>append</b></h2>
<div class="container">
  <div class="inner">Вставить внутри элемента</div>
  <div class="inner">Переместить внутрь элемента</div>
</div>
```
```js
// Создадим на лету параграф <p>, добавим его в конец содержимого 
// всех элементов с классом 'inner' и переместим заголовок <h2>, 
// вставив его после всех дочерних элементов блока с классом 'container'.

<script type="text/javascript">
 $('.inner').append('<p>***</p>');
 $('.container').append($('h2'));
</script>
```

 * `.prepend(..)/.prepentTo(..)` вставити самою першою дитиною обрганого вузла.

* `html()`

  * `html()` (неприймає аргументів) - повертає те що містить елемент.
      > Якщо селектор відповідає декілкьом елементам ,то лише перше співпадіня буде повернене html-вмісту:
      ```javascript
      $( "div.demo-container" ).html();
      ```
      ```javascript
      <div class="demo-container">
        <div class="demo-box">Demonstration Box</div>
      </div>
      ```
      Результат буде виглядати так :
      ```javascript
      < div class = "demo-box" > Demonstration Box </ div >
      ```

  * `html(string)` перезаписує вміст елемента;
      >Якщо селектор відповідає декілкьом елементам ,то всі вони заміняться новим змістом.
      ```javascript
      $( "div.demo-container" )
      .html( "<p>All new content. <em>You bet!</em></p>" );
       ```
     >Цей рядок замінить все в середині `<div class="demo-container">`
     ```javascript
      <div class="demo-container">
         <p>All new content. <em>You bet!</em></p>
      </div>
     ``` 
* `hide()`

  * метод `hiden()`, без параметрів ,просто скриває елементи:
  ```javascript
      $( ".target" ).hide();
  ```
  *  метод `hiden(text)` з параметрами, стає методом анімації.

      >Анімує висоту,ширину,непрозорість елементів.

      >Якщо елемент має `display: inline;` і скритий ,а потім відображений,то він знову буде `inline`.

      >Тривалість в мілісекундах.Штрихи  `fast` та `slow` можуть бути надані для позначення тривалості 200 і 600 мілісекунд, відповідно.

      > `hide()` запускається негайно і перевизначає чергу анімації, якщо не вказана тривалість 0.

      >`fadeIn(4000)` - затримка 
      ```javascript
        $(".text").fadeIn(4000);
      ```
      ```html
      <div class="text">text</div>
      ```
      >Приклад 1:
  ```html
  <div id="click">klick</div>
  <img id="book" src="foto.jpg" alt="" width="290" height="200">
  ```
  ```scss
    $(document).ready(function() {
      $('#click').click(function() {
        $('#book').hide("slow", function() {
          alert('click');
        })
       })
    });
  ```
    >Приклад 2:
  ```html
    <button>button</button>
    <p>lorem</p>
    <p>tratata</p>
  ```
  ```scss
    $("button").click(function() {
      $("p").hide("slow");
    })
  ```
    >Приклад 3:
  ```scss
    div {
      background: #ece023;
      width: 30px;
      height: 40px;
      margin: 2px;
      float: left;
    }
  ```
  ```html
  <div><div>
  ```
  ```javascript
  for ( var i = 0; i < 5; i++ ) {
  $( "<div>" ).appendTo( document.body );
  }
  $( "div" ).click(function() {
    $( this ).hide( 2000, function() {
      $( this ).remove();
    });
  });
  ```
* `fadeTo`
`$("#div").fadeTo(1000, 0.1)` - прозорість елемента.

* `css(property)` — получение значения CSS свойства

    `css(property, value)` — установка значения CSS свойства

    `css({key: value, key:value})` — установка нескольких значений

    `css(property, function(index, value) { return value })` — тут
    для установки значения используется функция обратного вызова,
    index это порядковый номер элемента в выборке, value —
    старое значение свойства (в просторечии — callback-функция)
    >Метод css() возвращает текущее значение, а не прописанное в CSS файле по
    указанному селектору

* `.empty()`
Полностью удаляет все содержимое (все дочерние узлы, включая текстовые) всех элементов в наборе jQuery.

*  `slide+`
    * `slideUp()` - звертання .
    * `slideDown()` - розвертання.
    * `slideToggle(800)` - задає швидкість анамації.

* ` Touch подія `

    * **touchstart** — событие схоже с mousedown, происходит **при касании пальцем экрана

    * **touchend** — убираем палец с экрана, ака mouseup

    * **touchmove** — водим пальцем по экрану — mousemove

    * **touchcancel** — странное событие, отмена touch до того, как палец был убран



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
*  `mouseover`

наведение курсора на элемент
  
*  `mouseout`

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
_______________
## Wourd

* closest()
>Для кожного селектора отримаєте перший елемент.Шукає предків в дом дереві. `.parents() и .closest()`

* append()
>Додає содєржиме в кінці елемента.

* remove()
>Видалення

* інтерполяція строк js

**tag `строка текста ${выражение} строка текста`**

`"Fifteen is " + (a + b) + " and not " + (2 * a + b) + "."`

``Fifteen is ${a + b} and not ${2 * a + b}.``

* find()
>знайти елемент

* slideDown()
>Скользить вниз

* slideUp()
>Скользить вгору

* val()
>Получення значення першого елемента.

* css()
>Встановлює або повертає властивості стиля обраного елемента.

* animate()
>Анімування.Більшість властивостей котрі НЕ є числовими не можуть бути анімовані.

>До числових значень можуть бути застосовані ` 'show' , 'hide' и 'toggle'`.

>Швидкість `'fast' и 'slow'`.

* next()
>Отримуємо настубного родича.

* dane()
>Метод .data() дозволяє додати дані любого типу доелементів  DOM такимчином.

* prev()
>отримає попередніх родичів .Якщо присутній селектор то лише йому належний попередній родич.

* first()
>Виділяє перший елемент.

* parent()
>Отримує батьківський елемент кожного елемента в наборі.

* children()
>Отримати дочерній елемент кожного елемента в наборі.

*  after()/insertAfter()
>Вставляє після елемента.
> С .after() выражение селектора, предшествующее методу, является контейнером, после которого содержимое вставляется. С .insertAfter() , с другой стороны, содержимое предшествует методу, либо как выражение выбора, либо как разметка, созданная «на лету», и она вставляется после целевого контейнера.

* before()/insertBefore()
>Вставити перед елементом.

* append/ appendTo()
>Вставити в кінці кожного елемента.
 >С .append() выражение-селектор, предшествующий методу, представляет собой контейнер, в который вставлено содержимое. С .appendTo() , с другой стороны, содержимое предшествует методу, либо как выражение выбора, либо как разметка, созданная «на лету», и она вставляется в целевой контейнер.

* prepend/prependTo()
>Вставити на початку кожног елементу.

* closest()
>Шукає елементи і їх предків в DOM

* filter()
>перевіряє елементи ,котрі відповіда.ть селектору будуть включені в результат.

* text()
>Комбінований текст всіх согласованих елементів.НЕ приймає аргументів.

* fadeIn()
>анімація, до непрозрачних.

* fadeOut()
>Скрити елемент,затухання до прозрачних.

* fadeToggle()
>Відображення або скривання елементів оживляючи їх непрозорість.


