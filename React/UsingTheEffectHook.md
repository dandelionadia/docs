# Using the Effect Hook

```js
import React, { useState, useEffect } from "react";

function Example() {
  const [count, setCount] = useState(0);

  // Аналогично componentDidMount и componentDidUpdate:
  useEffect(() => {
    // Обновляем заголовок документа с помощью API браузера
    document.title = `Вы нажали ${count} раз`;
  });

  return (
    <div>
      <p>Вы нажали {count} раз</p>
      <button onClick={() => setCount(count + 1)}>Нажми на меня</button>
    </div>
  );
}
```

## Эффекты без сброса

> Иногда мы хотим выполнить дополнительный код после того, как React обновил DOM. Сетевые запросы, изменения DOM вручную, логирование — всё это примеры эффектов, которые не требуют сброса. После того, как мы запустили их, можно сразу забыть о них, ведь больше никаких дополнительных действий не требуется.

#### Пример с использованием классов

```js
class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  componentDidMount() {
    document.title = `Вы нажали ${this.state.count} раз`;
  }

  componentDidUpdate() {
    document.title = `Вы нажали ${this.state.count} раз`;
  }

  render() {
    return (
      <div>
        <p>Вы нажали {this.state.count} раз</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Нажми на меня
        </button>
      </div>
    );
  }
}
```

Мы хотим чтобы они выполнялись после каждого рендера — но у классовых React-компонентов нет таких встроенных методов.

как мы можем сделать то же самое с использованием хука useEffect:

#### Пример с использованием хуков

```js
import React, { useState, useEffect } from "react";

function Example() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Вы нажали ${count} раз`;
  });

  return (
    <div>
      <p>Вы нажали {count} раз</p>
      <button onClick={() => setCount(count + 1)}>Нажми на меня</button>
    </div>
  );
}
```

> мы советуем просто иметь в виду, что эффекты выполняются после каждого рендера. React гарантирует, что он запустит эффект только после того, как DOM уже обновился.

## Эффекты со сбросом

> Например, нам может потребоваться установить подписку на какой-нибудь внешний источник данных. В этом случае очень важно выполнять сброс, чтобы не случилось утечек памяти!

#### Пример с использованием классов

Например, предположим, что у нас есть некий модуль ChatAPI, с помощью которого мы можем подписаться на статус друга в сети.

```js
class FriendStatus extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOnline: null };
    this.handleStatusChange = this.handleStatusChange.bind(this);
  }

  componentDidMount() {
    ChatAPI.subscribeToFriendStatus(
      this.props.friend.id,
      this.handleStatusChange
    );
  }

  componentWillUnmount() {
    ChatAPI.unsubscribeFromFriendStatus(
      this.props.friend.id,
      this.handleStatusChange
    );
  }

  handleStatusChange(status) {
    this.setState({
      isOnline: status.isOnline
    });
  }

  render() {
    if (this.state.isOnline === null) {
      return "Загрузка...";
    }
    return this.state.isOnline ? "В сети" : "Не в сети";
  }
}
```

#### Пример с использованием хуков

```js
import React, { useState, useEffect } from "react";

function FriendStatus(props) {
  const [isOnline, setIsOnline] = useState(null);

  useEffect(() => {
    function handleStatusChange(status) {
      setIsOnline(status.isOnline);
    }

    ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
    // Указываем, как сбросить этот эффект:
    return function cleanup() {
      ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
    };
  });

  if (isOnline === null) {
    return "Загрузка...";
  }
  return isOnline ? "В сети" : "Не в сети";
}
```

> React будет сбрасывать эффект перед тем, как компонент размонтируется. Однако, как мы уже знаем, эффекты выполняются не один раз, а при каждом рендере. Вот почему React также сбрасывает эффект из предыдущего рендера, перед тем, как запустить следующий.

#

> Чтобы показать это на практике, давайте рассмотрим последовательность подписок и отписок, которые этот компонент может выполнить в течение некоторого времени.

```js
// Монтируем с пропсами { friend: { id: 100 } }
ChatAPI.subscribeToFriendStatus(100, handleStatusChange); // Выполняем первый эффект

// Обновляем с пропсами { friend: { id: 200 } }
ChatAPI.unsubscribeFromFriendStatus(100, handleStatusChange); // Сбрасываем предыдущий эффект
ChatAPI.subscribeToFriendStatus(200, handleStatusChange); // Выполняем следующий эффект

// Обновляем с пропсами { friend: { id: 300 } }
ChatAPI.unsubscribeFromFriendStatus(200, handleStatusChange); // Сбрасываем предыдущий эффект
ChatAPI.subscribeToFriendStatus(300, handleStatusChange); // Выполняем следующий эффект

// Размонтируем
ChatAPI.unsubscribeFromFriendStatus(300, handleStatusChange); // Сбрасываем последний эффект
```

## Совет: оптимизация производительности за счёт пропуска эффектов

- В некоторых случаях сброс или выполнение эффекта при каждом рендере может вызвать проблему с производительностью. **В классовых компонентах**, мы можем решить это используя дополнительное сравнение `prevProps` или `prevState` внутри `componentDidUpdate`:

```js
componentDidUpdate(prevProps, prevState) {
  if (prevState.count !== this.state.count) {
    document.title = `Вы нажали ${this.state.count} раз`;
  }
}
```

- **в API хука useEffect** . Вы можете сделать так, чтобы React пропускал вызов эффекта, если определённые значения остались без изменений между последующими рендерами. Чтобы сделать это, передайте массив в `useEffect` вторым необязательным аргументом.

```js
useEffect(() => {
  document.title = `Вы нажали ${count} раз`;
}, [count]); // Перезапускать эффект только если count поменялся
```

> В этом примере, мы передаём [count] вторым аргументом. Что это вообще значит? Это значит, что если count будет равен 5 и наш компонент повторно рендерится с тем же значением count = 5, React сравнит [5] из предыдущего рендера и [5] из следующего рендера. Так как, все элементы массива остались без изменений (5 === 5), React пропустит этот эффект. Это и есть оптимизация данного процесса.
