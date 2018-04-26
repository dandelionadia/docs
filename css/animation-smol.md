## Animation
>Переходи визначаються :
* які властивості анімації(`explicitly`);
* як вона почнеться(шлях затримки `delay`);
* як довго буде продовжуватися перехід(`duration`);
* як буде виконуватися перхід (швидко,повільно `timing function`);
* `transition-duration` - довжина переходу : 0.5s, 0.1s;
* `transition-timing-function: ease, line` розраховує проміжок переходу.
* `transition-delay:0.5s` - як довго чекати між зміною властивостей і початком переходу.
```html
<div>
 <p id="button">button</p>
</div>
```

```css
#button {
  transition: transform 1s;
  background-color: red;
  width: 80px;
  height: 30px;
  margin: 20px;
  padding: 10px;
  border-radius: 10px;
}

#button:hover {
  transform: scale(1.2);
}
```