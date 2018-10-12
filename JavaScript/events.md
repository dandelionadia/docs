# Events

* **addEventListener**

1
```html
<body onload="p()">
  <form >
    <input type="text" id="form">click
  </form>
</body>
```
```js
function p () {
  var a = document.getElementById("form");
  a.addEventListener('focus', foo);
  a.addEventListener('blur', doo);
  
  function foo() {
   console.log('focus');
  }
  
  function doo() {
    console.log('blure');
  }
}
```
```html
<body onload="initElement()">
  <span id="foo">door</span>
  <p>Lorem, ipsum.</p>
</body> 
```

2
```js
function initElement() {
  var p =  document.getElementById("foo");
  p.onclick = showAlert;
  
  function showAlert() {
    alert('onclick');
  }
}
```

3
```html
<table id="outside">
  <tr>
    <td id="t1">1</td>
  </tr>
  <tr>
    <td id="t2">2</td>
  </tr>
</table> 
```
```js
function modifyText(newText) {
  var t2 = document.getElementById("t2");
}

function modText(){
  console.log('click');
}

var el = document.getElementById("outside");
el.addEventListener("click", modText);
```

4
```html
<label>
  <input type="checkbox" id="one" onchange="funone()">checkbox
</label>
```
```js
function funone() {
  var checkbox = document.getElementById("one");

  if (checkbox.checked) {
    alert('good');
  } else {
    alert('bad');
  }
}
```
5
```html
<input type="radio" name="r1" value="5">0
<input type="radio" name="r1" value="55">1
<input type="radio" name="r1" value="555">2
<button onclick="funtwo()">look</button>

```
```js
function funtwo() {
  var radio = document.getElementsByName('r1');
  for (var i = 0; i < radio.length; i++){
    if (radio[i].checked) {
       alert('take ' +i+ ' element');
    } 
  }
}

```