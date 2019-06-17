*  adds gulp
```
npm i gulp
```

* adds less

```
npm i gulp-less
```

* create gulpfile.js
```
 <!-- terminal -->
gulp
<!-- виконує все що у файлі gulpfile.js -->
```

* incide  gulpfile.js

(node.js)
```
var gulp = require('gulp')
```
``require`` - з її допомогою можна підключати всі пакети котрі установили із допомогою npm в дану папку

```js
var gulp = require('gulp')
// підключення пакуту less
var less = require('gulp-less')


gulp.task('default', function() {
    //  watch - слідкує за змінами в файлі 
    gulp.watch('less/*.less', function(e) {
        // компіляція less через gulp
        //  передаєця шлях до зміненого файла 
        gulp.src(e.path)
            // pipe - виконати одну дію
            // переобразує файл за допомого less
            pipe.(less())
            // куди я це xочу покласти 
            // покласти в папку css
            pipe.(gulp.dest('css'))
    })
})
```

