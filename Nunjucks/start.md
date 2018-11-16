* display a variable (відобразити змінну)

```js
{{ username }}
```
*  Variable names can have dots in them which lookup properties
    * (імена змінних мають крапки які мають вдастивість пошуку)

```js
{{ foo.bar }}
```
# Filters
* Filters are essentially functions that can be applied to variables. They are called with a pipe operator ( | ) and can take arguments.
    * (Фільтри - по суті функції, які можна застосувати до змінних. Вони викликаються оператором труби ( | ) і можуть приймати аргументи.)

```js
{{ foo | title }}
{{ foo | join(",") }}
{{ foo | replace("foo", "bar") | capitalize }}
```

# Шаблон успадкування

* це спосіб полегшити повторне використання шаблонів. Під час написання шаблону ви можете визначити "блоки", які можуть відмінити дитячі шаблони. 
    * Template inheritance is a way to make it easy to reuse templates. When writing a template, you can define "blocks" that child templates can override.

```js
{% block header %}
This is the default content
{% endblock %}

<section class="left">
  {% block left %}{% endblock %}
</section>

<section class="right">
  {% block right %}
  This is more content
  {% endblock %}
</section>
```
```js
{% extends "parent.html" %}

{% block left %}
This is the left side!
{% endblock %}

{% block right %}
This is the right side!
{% endblock %}
```
*The output would be:*
```html
This is the default content

<section class="left">
  This is the left side!
</section>

<section class="right">
  This is the right side!
</section>
```

# Super

* You can render the contents of the parent block inside a child block by calling super. If in the child template from above you had:

    * Ви можете перетворити вміст батьківського блоку в дочірній блок, викликаючи super . Якщо у дитині шаблон згори ви мали:

    ```js
    {% block right %}
    {{ super() }}
    Right side!
    {% endblock %}
    ```
    ```html
    This is more content
    Right side!
    ```
# Tags
* **if**

перевіряє стан і дозволяє вибирати вміст.
```js
{% if variable %}
  It is true
{% endif %}
```
* You can specify alternate conditions with **elif (elseif)** and **else**:
```js
{% if hungry %}
  I am hungry
{% elif tired %}
  I am tired
{% else %}
  I am good!
{% endif %}
```
# for