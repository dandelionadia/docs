**`Чистая функция`** — это функция, которая при одинаковых значениях аргументов всегда возвращает одинаковые значения и не имеет наблюдаемых побочных эффектов.

### Функции первого класса

Good!

```js
const hi = name => `Hi ${name}`;
const greeting = hi;
greeting("times"); // "Hi times"
```

bad:

```jsx
const BlogController = {
  index(posts) {
    return Views.index(posts);
  },
  show(post) {
    return Views.show(post);
  },
  create(attrs) {
    return Db.create(attrs);
  },
  update(post, attrs) {
    return Db.update(post, attrs);
  },
  destroy(post) {
    return Db.destroy(post);
  }
};
```

Good:

```js
const BlogController = {
  index: Views.index,
  show: Views.show,
  create: Db.create,
  update: Db.update,
  destroy: Db.destroy
};
```

Например, эти две функции делают в точности одно и тоже, но последняя является бесконечно более общей и, следовательно, более переиспользуемой:

```js
// специфична для нашего конкретного приложения-блога
const validArticles = articles =>
  articles.filter(article => article !== null && article !== undefined),

// не потеряет своей актуальности и в будущих проектах
const compact = xs => xs.filter(x => x !== null && x !== undefined);
```
