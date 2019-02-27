## insertAdjacentHTML()
 разбирает указанный текст как HTML или XML и вставляет полученные узлы (nodes) в DOM дерево в указанную позицию. Данная функция не переписывает имеющиеся элементы, что предовращает дополнительную сериализацию и поэтому работает быстрее, чем манипуляции с **innerHTML**.

 ```js
    <!-- beforebegin -->
    <p>
    <!-- afterbegin -->
    foo
    <!-- beforeend -->
    </p>
    <!-- afterend -->
```

```js
// <div id="one">one</div> 
var d1 = document.getElementById('one'); 
d1.insertAdjacentHTML('afterend', '<div id="two">two</div>');

// At this point, the new structure is:
   <div id="one">one</div>
   <div id="two">two</div>
```

##
when you use **insertAdjacentHTML** you Don’t need to do **document.createElement()**,
 because you provide an HTML string `('<li>…</li>')`
## So, take a look at two same examples
```js

var box = document.getElementById(‘box’)
var li = document.createElement(‘li’)
li.innerText = ‘foo’
box.appendChild(li)
```
OR
```js
var box = document.getElementById(‘box’)
box.insertAdjacentHTML(‘beforeend’, ‘<li>foo</li>’)

They are completely the same. But done differently.
```