# **Transition**
```
transition: <property> <duration> <timing-function> <delay>;
```
* ``transition-property``

    
    *Указывает имя или имена свойств, чьи переходы должны анимироваться.*
    ```css
     transition-property: margin-right;
     transition-property: margin-right, color;
     transition-property: all;
     transition-property: none;
    ```
* ``transition-duration``

    *Определяет время происхождения перехода. Можно указать время анимирования всех свойств перехода сразу или для каждого свойства в отдельности.*

    ```css
    transition-duration: 500ms;
    transition-duration: 3s, 1s;
    ```

* ``transition-timing-function``

    *кривая Безье*
    #

    * `ease`

    Анимация начинается медленно, затем ускоряется и к концу движения опять замедляется. Аналогично cubic-bezier(0.25,0.1,0.25,1).

    * `ease-in`

    Анимация медленно начинается, к концу ускоряется. Аналогично cubic-bezier(0.42,0,1,1).

    * `ease-out`

    Анимация начинается быстро, к концу замедляется. Аналогично cubic-bezier(0,0,0.58,1).

    * `ease-in-out`

    Анимация начинается и заканчивается медленно. Аналогично cubic-bezier(0.42,0,0.58,1).

    * `linear`

    Одинаковая скорость от начала и до конца.

    * `step-start`

    Как таковой анимации нет. Стилевые свойства сразу же принимают конечное значение.

    * `step-end`

    Как таковой анимации нет. Стилевые свойства находятся в начальном значении заданное время, затем сразу же принимают конечное значение.

    * `steps`

    Ступенчатая функция, имеющая заданное число шагов.
    ```css
    transition-timing-function: steps(<число>, start | end)
    ```
    Здесь: <число> — целое число больше нуля; start — задаёт полунепрерывную снизу функцию; end — задаёт полунепрерывную сверху функцию.

    ```css
    /* Global values */
    transition-timing-function: inherit;
    transition-timing-function: initial;
    transition-timing-function: unset;
    ```

* ``transition-delay``

    *Определяет как много должно пройти времени, перед тем как начнётся переход.*


#
* Если любой список свойств короче, чем другие, его значения повторяюся, чтобы сделать его длину как и у других. Например:
```css
div {
  transition-property: opacity, left, top, height;
  transition-duration: 3s, 5s;
}
Это рассматривается как если бы это было:

div {
  transition-property: opacity, left, top, height;
  transition-duration: 3s, 5s, 3s, 5s;
}
```
```css
/* Применить к 1 свойству */
/* имя свойства | длительность */
transition: margin-left 4s;

/* имя свойства | длительность | задержка */
transition: margin-left 4s 1s;

/* имя свойства | длительность | временная функция | задержка */
transition: margin-left 4s ease-in-out 1s;

/* Применить к 2 свойствам */
transition: margin-left 4s, color 1s;

/* Применить ко всем измененным свойствам */
transition: all 0.5s ease-out;

/* Глобальные значения */
transition: inherit;
transition: initial;
transition: unset;
```

```
.box {
    border-style: solid;
    border-width: 1px;
    display: block;
    width: 100px;
    height: 100px;
    background-color: #0000FF;
    transition: width 2s, height 2s, background-color 2s, transform 2s;
}

.box:hover {
    background-color: #FFCCCC;
    width: 200px;
    height: 200px;
    transform: rotate(180deg);
}
```