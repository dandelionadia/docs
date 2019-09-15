## State Hook

```js
function Example() {
  // Объявляем новую переменную состояния "count"
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Вы нажали {count} раз</p>
      <button onClick={() => setCount(count + 1)}>Нажми на меня</button>
    </div>
  );
}
```

`useState` — это хук.

> React будет хранить это состояние между рендерами. Вызов useState возвращает две вещи: текущее значение состояния и функцию для его обновления. Она схожа с this.setState в классах, но не сливает новое и старое состояние вместе.

### Что же такое хук?

Хуки — это функции, с помощью которых вы можете «подцепиться» к состоянию и методам жизненного цикла React из функциональных компонентов.

> Хуки не работают внутри классов — они дают вам возможность использовать React без классов.

## But what is a Hook?

Hooks are functions that let you “hook into” React state and lifecycle features from function components.

> Hooks don’t work inside classes — they let you use React without classes.
