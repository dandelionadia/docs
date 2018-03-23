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
**this** - ідентифікатор ,визначає елементи над котрими будуть виконуватися операції.

### Архітектура
```js
$.fn.disable = function() {
  return this.each(function() {
    if (this.disabled == null) this.disabled = true;
  });
}
```
`$.fn.disable` - розширяємо **$** методом з іменем **disable**


`each()` - метод,викликається для обходу елементів.

 `on()`- додає обробчик подій  вибраому елементу.

## Пошук Sizzle
`getElementById(id)` – поиск по id="…"

`getElementsByName(name)` – поиск по name="name" и id="name"

`getElementsByClassName(class)` – поиск по class="class"

`getElementsByTagName(tag)` – поиск по тегу

`querySelectorAll(selector)` – поиск по произвольному CSS селектору

>Результат пошуку не кешується
