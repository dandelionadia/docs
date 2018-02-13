# Setup

## 1. IDE (Редактор коду)

* [Скачати Visual Studio Code](https://code.visualstudio.com/)

## 2. Термінал

### Ubuntu
* `Ctrl + Alt + T`

### Windows
* `Win + R`, написати `cmd`, Enter

### macOS
* `cmd + Space (Пробіл)`, написати  `terminal`, Enter

## 3. NodeJS

### Перевірити наявність
Виконай наступну команду в терміналі:

```bash
node --version
```

Якщо в результаті з"явиться один рядок із цифрами (`v6.5.0`), отже NodeJS встановлений.

Якщо в результаті з"явиться один чи декілька рядків із словами - NodeJS не встановлено, тобі потрібно встановити його самостійно.

### Встановлення NodeJS
* [Скачати NodeJS](https://nodejs.org/uk/)

## (Необов'язково) Git
* [Скачати Git](https://git-scm.com)

---

## Структура проекту
```
./
  build/
    index.html
  src/
    styles/
      base/
        typography.scss
      components/
        foo.scss
      main.scss
```

---

# Modules (модули)

## SASS

### Встановлення
Виконай наступну команду *будучи в папці із проектом*:

```bash
npm i node-sass -g
```

### Використання
```bash
node-sass ./src/styles/main.scss ./build/css/main.css -r
```

> Флажок `-r` каже `node-sass` слідкувати за змінами і компілювати їх CSS в автоматично.
