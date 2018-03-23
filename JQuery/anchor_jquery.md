

## Якорь дж
```html
  <div class="box">

    <div class="link">
      <a class="pozition" href="#title1">Title 1</a>
      <a class="pozition" href="#title2">Title 2</a>
    </div>
  
    <div class="text">
      <a class="title" id="title1">Tile 1</a>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    
      <a class="title" id="title2">Tile 2</a>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    </div>
  </div>
```
```js
$(document).ready(function() {
  $('.pozition').click(function() {
    // повертає значення обраного елемента
      var id  = $(this).attr('href'),
      // відступ елемента по відношенню до дкумента
      top = $(id).offset().top;
      // анімація зі швидкість
    $('html').animate({ scrollTop: top }, 1200);
  })
})

```