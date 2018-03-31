```js
$(document).ready(function() {
  
  $('.tabs li').click(function() {
    var tabId = $(this).data('tab');
 
    $('.tabs li').removeClass('current');
    $(this).addClass('current');
    
    $('.tab-content').removeClass('current');
    $("#"+tabId).addClass('current');
    
  })
 
 })
 ```

```html
<div class="container">
  
  <ul class="tabs">
    <li class="tab-link current" data-tab="tab-1">Tab One</li>
    <li class="tab-link" data-tab="tab-2">Tab Two</li>
    <li class="tab-link" data-tab="tab-3">Tab Three</li>
  </ul>
  
  <div id="tab-1" class="tab-content current">111111111</div>
  <div id="tab-2" class="tab-content">2222222</div>
  <div id="tab-3" class="tab-content">333333</div>
  
</div>
```

```css
body {
  font-family: Ubunta,serif;
  line-height: 1.6
}

.container {
  width: 700px;
  margin: 0 auto;
}

.tabs {
  margin: 0;
  padding: 0;
  list-style: none;
}

.tabs li {
  background: none;
  color:#222;
  display: inline-block;
  padding: 10px 15px;
}

li.current {
  background: #ededed;
  color: #222;
}
.tab-content {
  display: none;
  background: #ededed;
  padding: 15px;
}

.tab-content.current{
	display: inherit;
}
```
