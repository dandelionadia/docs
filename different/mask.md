## Mask
```css
.hat {
  background-image: url('../../src/images/2.png');
  position: relative;
  background-size: cover;
  background-repeat: no-repeat;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 0;
  
  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 70;
    background-color: rgba(40, 32, 25, 0.6);
    z-index: -1;    
  }
}
```