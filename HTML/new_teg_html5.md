## New teg HTML5
### Header
>Містить заголовок і підзаголовок.
Тег `header` також може містити тег `hgroup`, він групіює заголовки разом.
```html
<header>
    <hgroup>
          <h1>Main Heading</h1>
          <h2>Sub-heading </h2>
    </hgroup>
    <p> Text or images can be included here</p>
</header>
```
### Navigation
>Створюється за допомогою тега `nav`,для навігації.
```html
<nav>
     <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Our Products</a></li>
          <li><a href="#">Contact Us</a></li>
     </ul>
</nav>
```
### Article and Section

* `article` - для контанта сторінки,котрий може бути використаний незалежно він інших контентів сторінки. Область `article` містить три області `section`.
>Для статі чи блога, котра може бути переміщена в новий контент, без зкривлення  сенсу контента.

* `section` - містить релевантні області компонентів.
>Для групування подібної інформації. Не може бути переміщенв в інший контент сама по собі ,бо її сенс пуде втрачений.

Тег `section` — і тег `article` - містить любі компоненти.

Починається з `header` і закінчується `footer`.

Тег `section` може містити теги `article`.А теги `article` можуть містити теги `section`.
```html
<article>
     <section>
          Content
     </section>
     <section>
          Content
     </section>
</article>
<section>
     <article>
          Content
     </article>
     <article>
          Content
     </article>
</section>
```
### Figure
Теги section, article, header, footer можуть містити тег `figure` - для додавання зображення.

Тег `figure` містить тег `figcaption` - підписи для зображень.
```html
<figure>
     <img src="/figure.jpg" width="304" height="228" alt="Picture">
     <figcaption>Caption for the figure</figcaption>
</figure>
```
### Aside

`Aside` - для допоміжного контенту,який не є частиною сновного матеріалу.Наприклад дял висновків у статтях.

>Містить контент який може бути видалений без шкоди основній інформації на сторінці.
```html 
<p>My family and I visited Euro Disney last year.</p>
<aside>
     <h4>Disney in France</h4>
     <p>Besides Euro Disney, there is a Disneyland in California.</p>
</aside>
```
### Footer
Містить інформацію про сторінку.Наприклад дата написання ,дані про автора.
```html 
<footer>
     <p>Copyright 2011 Acme United. All rights reserved.</p>
</footer>
```
# English
* `section` element groups related data when there is no specific tag to group it.

* `header` element wraps introductory content (navigation, headings).

* `footer` is a footer for the nearest section or root element. Usually contains information about the author of the section.

* `aside` wraps the content which is not directly related to the main content of the page. Doesn't affect the page's content if removed.

* `article` element represents independent content sections of the page.