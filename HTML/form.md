# Form
```html
<form action="" method="">text</form>
```
* `post` - прихований метод.
* `get` - в адресному рядку.
* `action` ="дані з ім'ям і паролем відправляються на сервер".

```html
<label for="fullname"> Name:</label>
<input type="text" name="name" placeholder="Артем Артемович">
```
`name` - ім'я елемента форми.

`value`- значення котре буде передаватися на сервер.

`type`- тип поле(текст,кнопка..).

`placeholder`- підказка вводу.

`label`- ім'я поля вводу.

`input`- поле вводу.

## Атрибути type:
* `text` - для тексту.
* `password` - для паролю.
* `checkbox` - поле з галочкою.
* `radio` - реалізує перемикач 🔘.

## Атрибути:
* `action` - силка на файл,буде обробляти дані форми.
* `method` - вказує на метод запросу до серверу.
* `target` - вказує як будуть відображатисярезультати в текстовому вікні чи у новій вкладці.
* `autocompete` - контролює автозаповнення форм.

## Кнопка зброса
`<input type="reset" value="">`

## Кнопка для відправки файла
`<button name="submit">text</button>`

## Вирівнювання форм:
```css
.field__color {
  border-color: rgb(138, 192, 255);
}

.field {
  padding: 5px;
  text-align: right;/*step 1*/
  line-height: 25px;/*висота строки*/
  color: rgb(156, 144, 144);
}

.pole {
  float: left;/*step 2*/
  padding-right: 10px;
}

.main {
  float: left;/* step 3*/
}

.reset {
  color: rgb(85, 78, 78);
  border-color:  rgb(138, 192, 255);
  background-color: azure;
  width: 173px;
  margin-left: 80px;
  margin-top: 8px;
}
```
```html
  <form class="main" action="">
    <div class="field">
      <label class="pole" for="name">name:</label>
      <input type="text" class="field__name field__color" id="name" placeholder="Artem">
    </div>

    <div class="field">
      <label class="pole" for="password">password:</label>
      <input type="password" class="field__password field__color" id="password" placeholder="11111">
    </div>
    <input class="reset" type="reset">
  </form>
  ```
