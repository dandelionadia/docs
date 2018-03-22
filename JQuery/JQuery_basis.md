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
