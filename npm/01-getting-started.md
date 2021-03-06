# Getting started with npm / Початок роботи з npm

## Install / Встановлення
Зазвичай npm йде разом із NodeJS, тому часто немає необхідності встановлювати його вручну.

Однак, npm, як і будь-який модуль, має оновлення, котрі зазвичай пропонує встановити через термінал. Щоб встановити оновлення виконай наступну команду:

```
npm install npm -g
```

## Create new module / Створення нового модулю
Спочатку перейди до нової або існуючої директорії, в якій потрібно створити новий npm модуль. Знаходячись у потрібній директорії, виконай наступну команду в терміналі:

```
npm init
```

Це ініціалізує (**init**ialize) новий модуль. Під час ініціалізації npm проведе серію запитів щодо додаткової інформації про новий модуль (назву, опис, версію, і т.д.). Заповни згадані запити відповідно до створеного модулю.
