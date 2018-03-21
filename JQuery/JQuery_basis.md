## Підключення:
1. Скачати на офіційному сайті :
Download the uncompressed, **development** jQuery 3.3.1
2. Підключення бібліотеки до сторінки :
```html
<!--Данный способ хорош для работы в offline,скачування на комп-->
<script type="text/javascript" src="js/jquery.js"></script>
<!--онлайн використання-->
<script type="text/javascript"
src="https://ajax.googleapis.com/ajax/libs/jquery/1.8.1/jquery.min.
js"></script>
```
```html
    <!-- у папкі з файлами є бапка в котрій знаходиться бібліотека -->
    <script src="./scripts/jquery-1.4.js"></script>

    <!-- у папкі з файлами знаходиться бібілотека -->
     <script src="./jquery-1.4.js"></script>
```
**Функція буде виконуватися коли вся сторінка буде завантажена :**
```js
$(document).ready(function() {
  // ...
});
```

### Архітектура
```js
$.fn.disable = function() {
  return this.each(function() {
    if (this.disabled == null) this.disabled = true;
  });
}
```
`$.fn.disable` - розширяємо **$** методом з іменем **disable**

**this** - ідентифікатор ,визначає елементи над котрими будуть виконуватися операції.

`each()` - метод,викликається для обходу елементів.

 `on()`- додає обробчик подій  вибраому елементу.

  `addClass()`- додавати класи.

  `removeClass()` - видалення класу.
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

 ## Маніаулювання атрибутами :
 * **attr()** функція призначена щоб отримати доступ до атрибута первого елемента виборки.                             
 *Повертає або змінює значення атрибута у вибраних елементів на сторінці.*
   *  **attr(attrNAme)** повертає значення *attrNAme* у вибраного елемета.
   * **attr(attrNAme.value)** атрибуту *attrNAme*  буде присвоєне значення *value* у всіх обраних елементах.
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

 * **removeAttr()** функція для видалення атрибута із елемента.

## Пошук Sizzle
`getElementById(id)` – поиск по id="…"

`getElementsByName(name)` – поиск по name="name" и id="name"

`getElementsByClassName(class)` – поиск по class="class"

`getElementsByTagName(tag)` – поиск по тегу

`querySelectorAll(selector)` – поиск по произвольному CSS селектору

>Результат пошуку не кешується

## Події
**change** — изменение значения элемента (значение, при потери фокуса, элемента
отличается от изначального, при получении фокуса)

**click** — клик по элементу (порядок событий: mousedown, mouseup, click)

**dblclick** — двойной щелчок мышки

**resize**— изменение размеров элементов

**scroll**— скроллинг элемента

**select** — выбор текста (актуален только для input[type=text] и textarea)

**submit** — отправка формы

**focus** — фокус на элементе - актуально для input[type=text], но в современных
браузерах работает и с другими элементами

**blur**— фокус ушёл с элемента — актуально для input[type=text] — срабатывает
при клике по другому элементу на странице или по событию клавиатуры (к примеру
переключение по tab'у)

**focusin**— фокус на элементе, данное событие срабатывает на предке элемента,
для которого произошло событие focus

**focusout** — фокус ушёл с элемента, данное событие срабатывает на предке
элемента, для которого произошло событие blur

**keydown**— нажатие клавиши на клавиатуре

**keypress**— нажатие клавиши на клавиатуре (keydown → keypress → keyup)

**keyup**— отжатие клавиши на клавиатуре

**load**— загрузка элемента (например img)

**unload** — выгрузка элемента (например window)

**mousedown** — нажатие клавиши мыши


**mouseup** — отжатие клавиши мыши

**mousemove** — движение курсора

**mouseenter** — наведение курсора на элемент, не срабатывает при переходе фокуса
на дочерние элементы

**mouseleave** — вывод курсора из элемента, не срабатывает при переходе фокуса на
дочерние элементы

**mouseover** — наведение курсора на элемент

**mouseout** — вывод курсора из элемента

