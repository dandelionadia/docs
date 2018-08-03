# 1
Первым аргументом задается начальное значение цвета - передадим его функции в виде переменной

$color

Вторым аргументом является значение в процентах, на которое нужно осветлить или затемнить исходный цвет:
```css
.lighten{
  background-color: lighten($color,10%);
}

.darken{
  background-color: darken($color,10%);
}
```
Функции lighten и darken могут использоваться в любом месте SCSS-кода - везде, где применяется цвет.

```css
.mixin{
  font-size: .95rem;
  background-color: lighten($color,20%);
  border: 1px solid darken($color,30%);
  color: darken($color,60%);
}
```

# 2
В препроцессоре Sass имеется пара функций для управления насыщеностью цвета.

**saturate()**

 увеличивает насыщенность цвета от исходного.

```css
.saturate{
  background-color: saturate($color,80%);
}
```
**desaturate()**

наоборот, уменьшает насыщенность цвета от исходного.
```css
.desaturate{
  background-color: desaturate($color,80%);
}
```

# 3
**transparentize**

 **fade-out**

 Будет выполнено преобразование в формат RGBA.Добавляет к исходному цвету альфа-канал и, тем самым, управляет прозрачностью исходного цвета.

```css
.transparentize{
  background-color: transparentize($color,.2);
}

.fadeout{
  background-color: fade-out($color,.2);
}
```
# 4
**opacify**

являются прямой противоположностью функций
 transparentize и fade-out

  В помощью этих функций цвет делается менее прозрачным:
  ```css
  .opacify{
  background-color: opacify($color,.3);
}

.fadein{
  background-color: fade-in($color,.3);
}
```

# 5

**rgba**

 При этом к выходному цвету добавляется альфа-канал для задания прозрачности цвета:

 ``css
 .rgba{
  background-color: rgba($color,.2);
}
```

 С практической точки зрения функция rgba равносильна функции transparentize/fade-out или opacify/fade-in.