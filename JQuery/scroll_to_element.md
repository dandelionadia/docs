```js
$(document).ready(function() {
  $('.pozition').click(function(event) {
    event.preventDefault();
    // повертає значення обраного елемента
    var id = $(this).attr('href'),
     // відступ елемента по відношенню до дoкумента
    top = $(id).offset().top;
     // анімація зі швидкість
    $('html').animate({ scrollTop: top }, 1200);
  })
})

```

```html
<div id="box">
  
  <div class="link">
    <a class="pozition" href="#title1">Title 1</a>
    <a class="pozition" href="#title2">Title 2</a>
    <a class="pozition" href="#title3">Title 3</a>
  </div>
  
  <div class="text">
    <h2 class="title" id="title1">Text 1</h2>
    <p>111111</p>
    <h2 class="title" id="title2">Text 2</h2>
    <p>222222</p>
    <h2 class="title" id="title3">Text 3</h2>
    <p>333333</p>
  </div>
</div>
```