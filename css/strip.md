## Strip
----------------Strip----------------
```html
<h3 class="heading">Strip</h3>
```
```css
.heading {
  display:flex;
  align-items:center;/*вирівнює по вертикалі*/
}

.heading::before,
.heading::after {
  content: "";
  flex: 1; /*вирівнює по горизонталі*/
  background-color: #ccc;
  height:  1px;
}

.heading::hefore {
  margin-right: 1rem;
}

.heading::after {
  margin-left: 1rem;
}
```