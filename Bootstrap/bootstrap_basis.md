Включити на потчаку всіх прроектів :
``` javascript
<!DOCTYPE html>
<html lang="en">
  ...
</html>
```
Додати метатег **viewport** в ваш **head**
``` javascript
<meta name="viewport" content="width=device-width, initial-scale=1">
```
Обмежити приближення на мобілих присторо додавши **user-scalable=no** ,можна лише скролити.Використовувати краще нечасто.
``` javascript
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
```
## Розмітка
* `row` має бути поміщено в `container` або `container-fluid`
* у рядка розташовуютьсь горизонтальні колонки `col-md-4`

## Функціональна розмітка
* `col-xs-` - дуже малі присторої (телефон)
* `col-sm-` - малий пристрій (планшет)
* `col-md-` - середній пристрій (настільний)
* `col-lg-` - великий пристрій  (настільний)
* колонки в рядку `1 - 12`

        |col-md-1|col-md-1|col-md-1|col-md-1|col-md-1|col-md-1|col-md-1|col-md-1|col-md-1|col-md-1|col-md-1|col-md-1|
        |col-md-8_______________________________________________________________|col-md-4___________________________|
        |col-md-4___________________________|col-md-4___________________________|col-md-4___________________________|
        |col-md-6_____________________________________________|col-md-6_____________________________________________|

## Резинові блоки
Ширина сітки перетворюється в повну ширину макета: 
 замість `container` пише  `container-fluid`.

## Мобільні і настольні
`class="col-xs-12 col-md-8"`
## Мобільні ,плншети ,настольні
```
|col-xs-12 .col-sm-6 .col-md-8________|col-xs-6 .col-md-4| 
|col-xs-6 .col-md-4|col-xs-6 .col-md-4|col-xs-6 .col-md-4|
```

## Адаптивні колонки
`visible-xs` aбо `hidden-xs`
## Зміщені колонки
`.col-md-offset-*` - переміщує колонку вправо зробивши відступ зліка,на ширину колонок кількість котрих вкажемо (1-12).

## Вкладені стопці
```html
<div class="row">
  <div class="col-md-9">
    Level 1: .col-md-9
    <div class="row">
      <div class="col-md-6">
        Level 2: .col-md-6
      </div>
      <div class="col-md-6">
        Level 2: .col-md-6
      </div>
    </div>
  </div>
</div>
```
```
|_______Level 1: .col-md-9____________|
|Level 2: .col-md-6|Level 2: .col-md-6|
|_________________level 1_____________|
```
## Вирівнювання колонок 
`.col-md-push-*` и `.col-md-pull-*`
