## class

```js
class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  render() {
    return (
      <div>
        <p>Вы кликнули {this.state.count} раз(а)</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Нажми на меня
        </button>
      </div>
    );
  }
}
```

## Hooks

> Хук — это специальная функция, которая позволяет «подцепиться» к возможностям React. Например, хук useState предоставляет функциональным компонентам доступ к состоянию React.

1. импортирует хук useState из React:

```js
import React, { useState } from "react";
```

2. Объявление переменной состояния

```js
import React, { useState } from 'react';

function Example() {
  // Объявление новой переменной состояния «count»
  const [count, setCount] = useState(0);
```

> useState это новый способ использовать те же возможности, что даёт this.state в классах. Обычно переменные «исчезают» при выходе из функции. К переменным состояния это не относится, потому что их сохраняет React.

> Единственный аргумент useState это исходное состояние. В отличие от случая с классами, состояние может быть и не объектом, а строкой или числом, если нам так удобно.

> Вызов useState вернёт пару значений: текущее состояние и функцию, обновляющую состояние. Поэтому мы пишем const [count, setCount] = useState(). Это похоже на this.state.count и this.setState в классах, с той лишь разницей, что сейчас мы принимаем их сразу в паре.

### Обновление состояния

В классе мы вызываем this.setState(), когда надо обновить состояние count:

```js
<button onClick={() => this.setState({ count: this.state.count + 1 })}>
  Нажми на меня
</button>
```

В функции нам не нужен this, потому что setCount и count уже доступны как переменные:

```js
<button onClick={() => setCount(count + 1)}>Нажми на меня</button>
```

### Резюме

```js
 1:  import React, { useState } from 'react';
 2:
 3:  function Example() {
 4:    const [count, setCount] = useState(0);
 5:
 6:    return (
 7:      <div>
 8:        <p>Вы кликнули {count} раз(а)</p>
 9:        <button onClick={() => setCount(count + 1)}>
10:         Нажми на меня
11:        </button>
12:      </div>
13:    );
14:  }
```

### Использование нескольких переменных состояния

```js
function ExampleWithManyStates() {
  // Объявим несколько переменных состояния!
  const [age, setAge] = useState(42);
  const [fruit, setFruit] = useState('банан');
	const [todos, setTodos] = useState([{ text: 'Изучить хуки' }]);
```

В примере выше мы видим локальные переменные age, fruit и todos, которые можем обновлять независимо друг от друга:

```js
function handleOrangeClick() {
  // Аналогично коду this.setState({ fruit: 'апельсин' })
  setFruit("апельсин");
}
```

> Обычно переменные «исчезают» при выходе из функции. К переменным состояния это не относится, потому что их сохраняет React.
