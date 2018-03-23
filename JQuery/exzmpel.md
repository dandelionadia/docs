```js
 <!-- Скрипт на языке JavaScript --> 
<script type="text/javascript">
  $(document).ready(function(){
    // Инициализирует карусель
    $(".start-slide").click(function(){
      $("#myCarousel2").carousel('cycle');
    });
    // Осуществляет переход на предыдущий слайд
    $(".prev-slide").click(function(){
      $("#myCarousel2").carousel('prev');
    });
    // Осуществляет переход на следующий слайд
    $(".next-slide").click(function(){
      $("#myCarousel2").carousel('next');
    });

  });
  </script>
  ```
  ```html
  <!-- HTML код карусели -->
  <div class="examplecarusel">
  <div id="myCarousel2" class="carousel slide" data-interval="3000" data-ride="carousel">
    <!-- Слайды карусели -->
    <div class="carousel-inner">
      <!-- 1 слайд -->
      <div class="active item">
        <h2>Слайд №1</h2>
        <div class="carousel-caption">
          <h3>Заголовок 1 слайда</h3>
          <p>Описание 1 слайда...</p>
        </div>
      </div>
      <div class="item">
        <h2>Слайд №2</h2>
        <div class="carousel-caption">
          <h3>Заголовок 2 слайда</h3>
          <p>Описание 2 слайда...</p>
        </div>
      </div>
      <div class="item">
        <h2>Слайд №3</h2>
        <div class="carousel-caption">
          <h3>Заголовок 3 слайда</h3>
          <p>Описание 3 слайда...</p>
        </div>
      </div>
    </div>
  </div>  
  <!-- Кнопки управления -->
  <div style="margin-top: 20px; text-align:center;">
    <input type="button" class="btn btn-info prev-slide" value="Предыдущий">
    <input type="button" class="btn btn-info next-slide" value="Следующий">
  </div>
  ```