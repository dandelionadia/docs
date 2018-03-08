## Carousel

https://codepen.io/kettanaito/pen/QQePzY

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
  <title>Document</title>
  <link rel="stylesheet" href="./index.css">
</head>
<body>
  <!-- головний контейнер -->
  <div class="container">
    <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
      <!-- контейнер слайдів -->
      <div class="carousel-inner">
        <!-- слайд 1 -->
        <div class="carousel-item active">
          <div class="slide">
            <h2>Slide one</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
        <!-- слайд 2 -->
        <div class="carousel-item">
          <div class="slide">
            <h2>Slide two</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>            
          </div>
        </div>
        <!-- слайд 3 -->
        <div class="carousel-item">
          <div class="slide">
            <h2>Slide three</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>            
          </div>
        </div>
      </div>
      <!-- кнопки на рівні контейнера слайдів -->
      <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  </div>
  
  <script src="jquery-3.3.1.js"></script>
  <script src="do.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
</body>
</html>
```
```css
.slide {
  background-color: rgb(85, 212, 212);
  height: 400px;
  text-align: center;
  padding-top: 100px;
}
```
```js
$(document).ready(function() {
  $('.carousel').carousel({
    interval: 5000
  });
});
```