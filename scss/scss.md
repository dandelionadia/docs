## Змінні
>Це спосіб зберігати інформацію котру хочеш використовувати на протязі написання всіх стилей проекта.Можна зберігати у змінних : кольори,шрифти..

#### Щоб створити змінну в scss використовується символ `$`
```scss
$font-stack: Helvetica, sans-serif;
$primary-color:#333;

body {
  font: 100% $font-stack;
  color: $primary-color;
}
```
>Використовується наприклад, при роботі з фірминими кольорами на всій сторінці.

## Вкладеності
>Надмірна вкладеність робить код менш читаючим.
```scss
nav {

  ul {
    margin: 0;
    padding: 0;
  }

  li {
    display: block;
  }

  a {
    display: block;
    padding: 6px 12px;
  }

}
```
>Селектори `ul,li,a` вкладені в селектор `nav`, це робить код більш читаючим.Коли згенеруєте css-файли будуть такими :

```css
nav ul {}
nav li {}
nav a {}
```

## Фрагментування
>Можна створювати фрагменти scss-файла  котрий буде містити в собі невеликий відривок css, котрий можна буде використовувати в інших css файлах.

>Фрагменти - це scss-файл ім'я котрого починається з нижнього підкреслювання, наприклад : `_partial.scss`.

>Нижнє підкресленя в імені scss-файла говорить компілятору про те , що е тільки фрагмент і він не має комплюватися в css.
>Фрагмент scss підключається за допомогою директиви `@import`.

## Імпорт

>css має можливість імпорта ,котрий розділяє ваш css на більш дрібні і полекшує їх обслуговування.
>Наприклад є декілкьа файлів scss, і ми хочемо їх імпортувати:
```scss
///_rest.scss
html,
body,
ul,
ol {
  margin: 0;
  padding: 0;
}

///base.scss
@import 'rest';
body {
  font: 100% Helvetica;
  background-color: #fff;
}
```
>Імпортується rest.scss в base.scss. Коли  імпортується файл то не треба вказувати розширенн `.scss`.
>коли `css`  згенерується, то отримаємо:
``` scss
html, body, ul, ol {
  margin: 0;
  padding: 0;
}

body {
  font: 100% Helvetica;
  background-color: #fff;
}
```

## Уаслідування/Рзширення
>Використовуючи директорію `@extend` можна унаслідувати набір властивостей css від одного селектора іншому.Це дозволяє тримати css в чистоті.

```scss
.message {
  border: 1px solid #ccc;
  padding: 10px;
  color: #333;
}

.success {
  @extend.message;
  border-color: green;
}

.error {
  @extend.message;
  border-color: red;
}

.warning {
  @extend.message;
  border-color: yellow;
}
```
Компілюється в :

```css
.message, .success, .error, .warning {
  border: 1px solid #ccc;
  padding: 10px;
  color: #333;
}
.success {
  border-color: green;
}

.error {
  border-color: red;
}

.warning {
  border-color: yellow;
}

```
## Символ '&`
>Символ `&` можна вказати, де може бути встановлений роздільний селектор:
 ```scss
 # main {
   color: black;
   a {
     font-weight: bold;
     &:hover {
       color: red;
     }
   }
 }
```
```css
# main {
  color: black;
  # main a {
    font-weight: bold;
  }
  # main a:hover {
    cokor: red;
  }
}
```
## Шаблонні селектори
>Вказується `%` він використовується  з директорією `@extend`.Він видний лише для нас ,але якщо хочемо щоб впливало на css то викликаємо його там де це є необхідним.
```scss
%for-grids {
  min-height: 1px;
  position: relative;
  padding: 10px;
}

.sgrin {
  @extend %for-grids;
}
```
```css
.sgrin {
  min-height: 1px;
  position: relative;
  padding: 10px;
}
```
## Аргумент 
```scss
@mixin sexy-border($color, $width) {
  border {
    color: $color;
    width: $width;
    style: dashed;
  }
}

p{
  @include sexy-border(blue, lin);
}
```
Компілюється 

```css
p {
  border-color:blue;
  border-width: lin;
  border-style: dashed;
}
```
