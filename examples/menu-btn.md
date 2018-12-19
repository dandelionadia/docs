```xtml
<div class="menu-btn" id="menu-btn">
  <div class="menu-btn__line"></div>
  <div class="menu-btn__line"></div>
  <div class="menu-btn__line"></div>
</div>
```
```scss
@mixin easeOut {
  transition: all 1s ease-out;
}

.menu-btn {
  position: absolute;
  z-index: 3;
  right: 35px;
  top: 35px;
  cursor: pointer;
  @include easeOut;
  
  &__line {
    background-color: black;
    width: 30px;
    height: 3px;
    margin: 0 0 5px 0;
    @include easeOut;
  }
  
  &--opened {
    transform: rotate(180deg);
    
    .menu-btn__line {
      &:nth-child(1) {
        transform: rotate(45deg) translate(5px, 5px);
      }
      
      &:nth-child(2) {
        opacity: 0;
      }
      
      &:nth-child(3) {
        transform: rotate(-45deg) translate(7px, -6px);
      }
    }
  }
}
```
```js
var menuBtn = document.getElementById('menu-btn');

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    // //   чи місться в menuBtn клас 'menu-btn--opened'
  var isMenuVisible = menuBtn.classList.contains('menu-btn--opened');
  
  if (isMenuVisible) {
     menuBtn.classList.remove('menu-btn--opened');
  } else {
     menuBtn.classList.add('menu-btn--opened');
  }
}
```