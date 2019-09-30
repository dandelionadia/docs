## throttle

\_.throttle создает обертку для функции и дает ей указание запускаться не чаще, чем раз в N миллисекунд.

> наприклад при зменшенні вікна, контент перемальовується кодні 0.5 секунд а не коден змінений піксель. Тобто неважилво як швидко зменшується вікно браузера, контент перемальоється рівно через 0.5 секунд.

```js
// Функция, выполняющаяся при ресайзе окна
var _onResizeWindow = function() {
  console.log("width: ", $window.width());
};
// Та же функция, только с _.throttle
var _onResizeWindowThrottled = _.throttle(_onResizeWindow, 300);

$(window).on("resize", _onResizeWindowThrottled);
```

## debounce

запускать нужную функцию (\_onKeyupEmailInput) не сразу, а только спустя некоторое время после срабатывания события в браузере (у нас keyup).

> оновлення інформаціі через 0.5 секунд з останньої активності. Тобто якщо я продожаєую друкувати то інформація не обовлюється.

```js
var _onKeyupEmailInputDebounced = _.debounce(_onKeyupEmailInput, timeDebounce);
```
