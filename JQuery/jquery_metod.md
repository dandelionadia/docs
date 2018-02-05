## Методи

## `html()`

  * `html()` неприймає аргументів;
      > Якщо селектор відповідає декілкьом елементам ,то лише перше співпадіня буде повернене html-вмісту:
      ```javascript
      $( "div.demo-container" ).html();
      ```
      ```javascript
      <div class="demo-container">
        <div class="demo-box">Demonstration Box</div>
      </div>
      ```
      Результат буде виглядати так :
      ```javascript
      < div class = "demo-box" > Demonstration Box </ div >
      ```

  * `html(string)` перезаписує вміст елемента;
      >Якщо селектор відповідає декілкьом елементам ,то всі вони заміняться новим змістом.
      ```javascript
      $( "div.demo-container" )
      .html( "<p>All new content. <em>You bet!</em></p>" );
       ```
     >Цей рядок замінить все в середині `<div class="demo-container">`
     ```javascript
      <div class="demo-container">
         <p>All new content. <em>You bet!</em></p>
      </div>
     ``` 
## `hide()`

  * метод `hiden()`, без параметрів ,просто скриває елементи:
  ```javascript
      $( ".target" ).hide();
  ```
  *  метод `hiden(text)` з параметрами, стає методом анімації.

      >Анімує висоту,ширину,непрозорість елементів.

      >Якщо елемент має `display: inline;` і скритий ,а потім відображений,то він знову буде `inline`.

      >Тривалість в мілісекундах.Штрихи  `fast` та `slow` можуть бути надані для позначення тривалості 200 і 600 мілісекунд, відповідно.

      > `hide()` запускається негайно і перевизначає чергу анімації, якщо не вказана тривалість 0.

      >`fadeIn(4000)` - затримка 
      ```javascript
        $(".text").fadeIn(4000);
      ```
      ```html
      <div class="text">text</div>
      ```
      >Приклад 1:
  ```html
  <div id="click">klick</div>
  <img id="book" src="foto.jpg" alt="" width="290" height="200">
  ```
  ```scss
    $(document).ready(function() {
      $('#click').click(function() {
        $('#book').hide("slow", function() {
          alert('click');
        })
       })
    });
  ```
    >Приклад 2:
  ```html
    <button>button</button>
    <p>lorem</p>
    <p>tratata</p>
  ```
  ```scss
    $("button").click(function() {
      $("p").hide("slow");
    })
  ```
    >Приклад 3:
  ```scss
    div {
      background: #ece023;
      width: 30px;
      height: 40px;
      margin: 2px;
      float: left;
    }
  ```
  ```html
  <div><div>
  ```
  ```javascript
  for ( var i = 0; i < 5; i++ ) {
  $( "<div>" ).appendTo( document.body );
}
$( "div" ).click(function() {
  $( this ).hide( 2000, function() {
    $( this ).remove();
  });
});
```
