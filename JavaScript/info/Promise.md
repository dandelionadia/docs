## Promise

> используется для отложенных и асинхронных вычислений.

#### Promise может находиться в трёх состояниях:

- ожидание (pending): начальное состояние, не выполнено и не отклонено.
- выполнено (fulfilled): операция завершена успешно.
- отклонено (rejected): операция завершена с ошибкой.

```js
function readPromise(file) {
  return new Promise((resolve, reject) => {
    fs.readFile(file, (error) => {
      if (error) {
        reject(error);
      }

      resolve();
    });
  });
}

readPromise("file.txt")
  .then(() => {
    console.log("Read!");
  })
  .catch((error) => {
    console.log("Oops! Failed", error);
  });
```

## Callback

> A callback function is a function passed into another function as an argument, which is doing sth, after action is finished.

```js
function read(file, callback) {
  fs.readFile(file, () => {
    callback();
  });
}

read("file.txt", () => {
  console.log("Read!");
});
```
