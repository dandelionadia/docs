### *Все команды существуют в двух вариантах*: 

* A - обозначает абсолютные координаты на странице
* a - относительные (например, перемещение от последней точки на 10px вверх и 7px влево).
### Команда "Передвинуть к" вызывается буквой **M**.

   *Команда "Переместиться к" используется в начале элемента <path> для указания точки, откуда начнется рисование, например*

```
M x y
m dx dy
```


### **Существуют три команды, которые рисуют линии.**
* **L** - "Линия к", вызываемая буквой **L**. Эта команда принимает два параметра - координаты точки x и y - и рисует линию от текущего положения к этой точке.
```
L x y (или l dx dy)
```
* **H** рисует горизонтальную линию
* **V** рисует вертикальную линию. 
```
H x (или h dx)
V y (или v dy)
 ```
### "Закрыть путь", Z. 
Эта команда рисует прямую линию от текущего положения обратно к первой точке пути. 
```
Z (или z)
```

## Команды кривых линий (Кривые Безье)
### Кубическая кривая, C
*принимает две контрольные точки для каждой точки.*

```
C x1 y1, x2 y2, x y (or c dx1 dy1, dx2 dy2, dx dy)
```
* (x1,y1) контрольная точка для начала вашей кривой
* (x2,y2) для конца вашей кривой.
* Последний (x,y) это точка, в которой заканчивается линия
```
<svg with="100" height="100">
  <path d="M 10 10 C 20 20, 40 20, 50 10"  stroke="black" fill="transparent"/>
</svg>
```
```
<svg with="100" height="100">
  <path d="M 10 10 c 0 25, 100 25, 100 0"  stroke="black" fill="transparent"/>
</svg>
```
![alt text](https://mdn.mozillademos.org/files/10401/Cubic_Bezier_Curves_with_grid.png)

###  S (или s)

```
S x2 y2, x y (or s dx2 dy2, dx dy)
```
Команда S задаёт тот же тип кривой, что и был, но если он следует за другой S или C командой, подразумевается, что первая контрольная точка - отражение той, что использовалась перед этим. Если команда S не следует за другой командой S или C, то подразумевается, что обе контрольные точки для кривой одинаковы.

```
<svg width="190" height="160" xmlns="http://www.w3.org/2000/svg">
  <path d="
           M10 50
           c 40 -60, 50 -60, 90 0
           s 40 60 90 0
           "
  stroke="black" stroke-width="2" fill="transparent"/>
</svg>
```

![alt text](https://mdn.mozillademos.org/files/10405/ShortCut_Cubic_Bezier_with_grid.png)

### квадратичная кривая, Q

 Она принимает два аргумента: контрольную точку и конец кривой.
 ```
 Q x1 y1, x y (or q dx1 dy1, dx dy)
 ```
 ![alt text](https://mdn.mozillademos.org/files/10403/Quadratic_Bezier_with_grid.png)

 ```
 <svg width="190" height="160" xmlns="http://www.w3.org/2000/svg">
  <path d="M10 80 q 85 -90 170 0" stroke="black" fill="transparent"/>
</svg>
```
### T - соединения нескольких квадратичных кривых
```
T x y (or t dx dy)
```
*Обратите внимание, что это работает только в том случае, если предыдущей командой была команда Q или T. Если это не так, то контрольная точка считается той же, что и предыдущая, и вы нарисуете только линии.*
```
<svg width="190" height="160" xmlns="http://www.w3.org/2000/svg">
  <path d="M10 80 Q 52.5 10, 95 80 T 180 80" stroke="black" fill="transparent"/>
  <path d="M10 80 q 42.5 -70, 85 0 t 85 0" stroke="red" fill="transparent"/>
</svg>
```
 ![alt text](https://mdn.mozillademos.org/files/10407/Shortcut_Quadratic_Bezier_with_grid.png)