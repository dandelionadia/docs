# Stroke
**Stroke** задаёт цвет линии, которая рисуется вокруг объекта.
* `stroke-width` определяет ширину обводки.Штрихи обводки рисуются вокруг пути. 
* `troke-linecap` cвойство управляет отображениеи концов линий.

![alt text](https://mdn.mozillademos.org/files/730/SVG_Stroke_Linecap_Example.png)

```
  <line x1="40" x2="120" y1="20" y2="20" stroke="black" stroke-width="20" stroke-linecap="butt"/>
```
* `stroke-linejoin`, чтобы определить, как соединять обводку двух сегментов линии.

![alt text](https://mdn.mozillademos.org/files/731/SVG_Stroke_Linejoin_Example.png)

```
<polyline points="40 60 80 20 120 60" stroke="black" stroke-width="20"
      stroke-linecap="butt" fill="none" stroke-linejoin="miter"/>
```
* `stroke-dasharray` пунктирные линии в обводке.

![alt text](https://mdn.mozillademos.org/files/729/SVG_Stroke_Dasharray_Example.png)

```
<svg width="200" height="150" xmlns="http://www.w3.org/2000/svg" version="1.1">
  <path d="M 10 75 Q 50 10 100 75 T 190 75" stroke="black"
    stroke-linecap="round" stroke-dasharray="5,10,5" fill="none"/>
  <path d="M 10 75 L 190 75" stroke="red"
    stroke-linecap="round" stroke-width="1" stroke-dasharray="5,5" fill="none"/>
</svg>
```
Первое число определяет длину штриха, второе - длину между штрихами. 
 первый путь отображается 5 закрашенными, 10 пустыми, 5 закрашенными и затем ещё раз 5 пустыми, 10 закрашенными, 5 пустыми "пикселями". Затем паттерн повторяется.