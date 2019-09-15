## Building Your Own Hooks

Иногда нужно повторно использовать одинаковую логику состояния в нескольких компонентах.

Ранее на этой странице мы рассматривали компонент FriendStatus, который вызывал хуки useState и useEffect, чтобы подписаться на статус друга в сети. Допустим, мы хотим ещё раз использовать эту логику с подпиской, но уже в другом компоненте.

Прежде всего, давайте извлечём эту логику в пользовательский хук useFriendStatus

```js
import React, { useState, useEffect } from "react";

function useFriendStatus(friendID) {
  const [isOnline, setIsOnline] = useState(null);

  function handleStatusChange(status) {
    setIsOnline(status.isOnline);
  }

  useEffect(() => {
    ChatAPI.subscribeToFriendStatus(friendID, handleStatusChange);
    return () => {
      ChatAPI.unsubscribeFromFriendStatus(friendID, handleStatusChange);
    };
  });

  return isOnline;
}
```

Хук принимает friendID в качестве аргумента и возвращает переменную, которая показывает, в сети наш друг или нет.

Теперь мы можем использовать этот хук в обоих наших компонентах:

```js
function FriendStatus(props) {
  const isOnline = useFriendStatus(props.friend.id);

  if (isOnline === null) {
    return "Загрузка...";
  }
  return isOnline ? "В сети" : "Не в сети";
}
```

```js
function FriendListItem(props) {
  const isOnline = useFriendStatus(props.friend.id);

  return (
    <li style={{ color: isOnline ? "green" : "black" }}>{props.friend.name}</li>
  );
}
```

> Состояния этих компонентов никаким образом не зависят друг от друга. Хуки — это способ использовать повторно логику состояния, а не само состояние. Более того, каждое обращение к хуку обеспечивает совершенно изолированное состояние. Вы даже можете использовать один и тот же хук несколько раз в одном компоненте.
