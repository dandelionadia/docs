## JavaScript

### Зміннні
>Оголошення змінних:
```javascript
var name = "Ivan";
var age = 32;
```
### Константи
>Змінні набрані у верхньому регістрі
```javascript
  var USER_STATUS_ACTIVE = 1;
```
### Типи даних 
1. **number** - ціле або дробне число:
```javascript
  var answer = 42;
  var pi = 3.1415;
```
```javascript
(NaN == NaN) == false;
 isNaN(NaN) == true;
 ```
2. **string** - строки в лапках:
```javascript
var str = "Hello World!";
```
3. **boolean** – ,бульове значення true або false:
```javascript
var result = true;
```
4. **null** - порожнеча:
```javascript
var result = null;
```
5. **undefined** :
```javascript
var a;
alert(a); // undefined
```
6. **object**

### Масиви
```javascript
                0      1       2
var users = ["Ivan", "Petr", "Serg"]
alert(users.length); // выведет 3
alert(users[0]); // выведет Ivan
```
>розмір масива зберігається в слові length'.

>В действительности length возвращает индекс последнего элемента массива+1,
так что не попадитесь:
```javascript
var a = []; a[4] = 10; alert(a.length); // выведет 5;
```
**Цикл for**
```javascript
for (var i = 0; i < users.length; i++) {
alert(users[i]); // последовательно выведет Ivan, Petr и Serg
}
```
**Методи push() и pop():**
```javascript
users.push("Sidorov"); // добавляем элемент в конец массива
var sidorov = users.pop(); // удаляем и возращаем последний элемент
```
**Методи unshift() и shift():**
```javascript
users.unshift("Sidorov"); // добавляем элемент в начало массива
var sidorov = users.shift(); // удаляем и возращаем первый элемент
```
## Функції
```javascript
function hello() {
alert("Hello world");
}
hello(); // Hello world
```
**Анонімні функції**
```javascript
function() {
alert("Hello world");
}
```
```javascript
var myAlert = function(name) {
alert("Hello " + name);
}
myAlert('Tod');
```
## Об'єкти:
* **хранилище даних**

```javascript
var user = {
name: "Ivan",
age: 32
};
alert(user.name); // Ivan
alert(user.age); // 32
```
```javascript
var user = {
name: "Ivan",
age: 32
};
for (var prop in user) {
alert(prop + "=" + user[prop]); // выведет name=Ivan и age=32
}
```
* **функціонал об'єкта**
## Область видимості this:
* коли оголошується змінна або функція то вона стає частиною **window**:
```javascript
var a = 1234;
console.log(window["a"]); // => 1234
function myLog(message) {
console.log(message);
}
window["myLog"](a); // => 1234
```
* коли шукана змінна не знайдена в даному полі зору, то її пошук буде продовжуватися в області видимості родітєльскої функції:
 ```javascript
 var a = 1234;
  (function(){
    var b = 4321;
    (function() {
        var c = 1111;
        console.log((a+b)/c); // => 5
    })();
  })();
```

## Замикання

 ```javascript
  var a = 1234;
  var myFunc = function(){
      var b = 4321;
      var c = 1111;
      return function() {
          return ((a+b)/c);
      };
};
var anotherFunc = myFunc(); // myFunc возвращает анонимную функцию
 // с «замкнутыми» значениями c и b
console.log(anotherFunc()); // => 5
 ```

