**Object.assign()** используется для копирования значений всех собственных перечисляемых свойств из одного или более исходных объектов в целевой объект. 

```js
var o1 = { a: 1 };
var o2 = { b: 2 };
var o3 = { c: 3 };

var obj = Object.assign(o1, o2, o3);
console.log(obj); // { a: 1, b: 2, c: 3 }
console.log(o1);  // { a: 1, b: 2, c: 3 }, изменился и сам целевой объект.
```
+ {} better
```js
var o1 = { a: 1 };
var o2 = { b: 2 };
var o3 = { c: 3 };

var obj = Object.assign({}, o1, o2, o3);
console.log(obj); // { a: 1, b: 2, c: 3 }
console.log(o1);  //  {a: 1}
```