## Rules of Hooks

- Используйте хуки только на верхнем уровне
  Не используйте хуки внутри циклов, условных операторов или вложенных функций.

      Исполнение этого правила гарантирует, что хуки вызываются в одинаковой последовательности при каждом рендере компонента. Это позволит React правильно сохранять состояние хуков между множественными вызовами useState и useEffect.

- Вызывайте хуки только из React-функций

---

- Only Call Hooks at the Top Level
  Don’t call Hooks inside loops, conditions, or nested functions.

      By following this rule, you ensure that Hooks are called in the same order each time a component renders. That’s what allows React to correctly preserve the state of Hooks between multiple useState and useEffect calls.

- Only Call Hooks from React Functions

> If we want to run an effect conditionally, we can put that condition inside our Hook:

```js
// 🔴 Нарушаем первое правило, помещая хук в условие
if (name !== "") {
  useEffect(function persistForm() {
    localStorage.setItem("formData", name);
  });
}
________________;

useEffect(function persistForm() {
  // 👍 Первое правило больше не нарушается
  if (name !== "") {
    localStorage.setItem("formData", name);
  }
});
```
