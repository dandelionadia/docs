## Методи

## `html()`

  * `html()` неприймає аргументів;
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
## `hide()`

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
## `fadeTo`
`$("#div").fadeTo(1000, 0.1)` - прозорість елемента.


## `slide+`
* `slideUp()` - звертання .
* `slideDown()` - розвертання.
* `slideToggle(800)` - задає швидкість анамації.
## Клас
* `addClass("")` - додати клас.
* `removeClass(""))` - видалити клас.
* `toggleClass("")` - підставляти клас при клікі 1 і приберати клас по кліку 2 .

## Методи для вставки в дом дерево
 * `.append(..)/.appentTo(...)` - вставити самою останньою дитиною обраного вузла.

 * `.prepend(..)/.prepentTo(..)` вставити самою першою дитиною обрганого вузла.

 * `.after(..)/.insertAfter(..)` вставка після обраного елемента.

 * `.beafor(..)/.insertBeafor(..)` - вставка перед обраним елементом.
 
 *  обертають одні елементи в інші:
    * `.wrap(..)` - огортає весь елемент ззовні;
    * `.wrapInner(..)` - огортає всередині елемента лише складові елемента;
    * `.wrapAll(..)` - огортає всі складові з різних еоементів в один дів елемент.
    `$(".class").wrap("<div></div>");`

## Атрибути елементів і CSS
`css(property)` — получение значения CSS свойства

`css(property, value)` — установка значения CSS свойства

`css({key: value, key:value})` — установка нескольких значений

`css(property, function(index, value) { return value })` — тут
для установки значения используется функция обратного вызова,
index это порядковый номер элемента в выборке, value —
старое значение свойства (в просторечии — callback-функция)
>Метод css() возвращает текущее значение, а не прописанное в CSS файле по
указанному селектору

## Touch подія 

**touchstart** — событие схоже с mousedown, происходит **при касании пальцем экрана

**touchend** — убираем палец с экрана, ака mouseup

**touchmove** — водим пальцем по экрану — mousemove

**touchcancel** — странное событие, отмена touch до того, как палец был убран

##  Особенности использования .parent(), .parents(), .closest(), .siblings()
Первый метод **.parent([selector])** -  находит родителя строго на один уровень вверх.
Пример: $(this).parent()

Для того чтобы получить родителя от родителя нужно применять цепочку вызовов (произвольной глубины): 

``$(this).parent().parent()....``

Второй метод **.parents([selector])**  - возвращает список всех родительских узлов, и,  может содержать селектор, для уточнения набора родителей. 
Пример:

 ``$(this).parents("li.test")``

Третий метод **.closest(selector, [context])** - возвращает первый ближайший родительский узел или же текущий узел - которые удовлетворяют условию в селекторе (селектор обязательный). Может принимать контекст для уточнения поиска (набор узлов заранее выбранных).
Основные отличия его от .parents():
    - может вернуть и текущий узел
    - обязательный селектор
   - возвращает только первый элемент который попал под условие, поиск ведется тоже вверх по дереву.
Пример: 

``$(this).closest("li.test")`` или ``$(this).closest("li.test", itemsList)``
```js
$(document).ready(function() {
  $('.content .text').click(function() {
    $(this).parents('.content').animate({opacity: 'hide'}, 'slow');
  })
})
```
```html
<div class="content">
  <h3>title</h3>
  <p class="text">Lorem</p>
</div>
```
Ну и наконец последний метод **.siblings([selector])** - возвращает набор соседних узлов (тех, которые имеют того же родителя что и текущий), может принимать уточняющий селектор.
Пример:

`` $("ul li#id1").siblings()``