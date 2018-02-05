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
* text - для тексту.
* password - для паролю.
* checkbox - поле з галочкою.
* radio - реалізує перемикач 🔘.

## Атрибути:
* `action`- силка на файл,буде обробляти дані форми.
* `method`- вказує на метод запросу до серверу.
* `target`- вказує як будуть відображатисярезультати в текстовому вікні чи у новій вкладці.
* `autocompete`- контролює автозаповнення форм.

## Кнопка зброса
`<input type="reset" value="">`

## Кнопка для відправки файла
`<button name="submit">text</button>`

## Вирівнювання форм:
```css
.field__color {
  border-color: rgb(231, 125, 125);
  
}
.field {
  padding: 5px;
  text-align: right; /*stap 1*/
  /* простір між рядками */
  line-height: 25px; 
  color: rgb(88, 6, 6);

}

.pole {
  float: left;/*stap 2*/
  padding-right: 10px;
}

.main {
  float: left;/*stap 3*/
}
```
```html
  <!-- stap 3  add <div class="main">-->
  <div class="main"> 
    <div class="field">
      <label class="pole" for="fullname"> Name:</label>
      <input class="field__name field__color" type="text" name="name" placeholder="Артем Артемович">
    </div>
    <div class="field">
      <label class="pole" for="fullname"> Password:</label>
      <input class="field__password field__color" type="text" name="password" placeholder="lorem123456">
    </div>
    <div>
      <input type="radio" name="radio">
      <label for="fullname"> woman </label>
      <input type="radio" name="radio">
      <label for="fullname"> man </label>
    </div>
  </div>
  ```
