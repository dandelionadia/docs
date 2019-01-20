## Деструктуризация объектов
```js
const Zell = {
  firstName: 'Zell',
  lastName: 'Liew'
}

// То, что вы пишите:
let { firstName, lastName } = Zell;

// То, что ES6 выполняет:
let firstName = Zell.firstName;
let lastName = Zell.lastName;
```
*При добавлении фигурных скобок к объявлению переменных конструируется указание создать эти переменные и затем присвоить Zell.firstName в firstName, а Zell.lastName в lastName.* 
#
*Обратим внимание на то, что если деструктурировать переменную, которая отсутствует в объекте, то будет возвращено undefined.*

```js
let course = {
  name: 'JS Fundamentals for Frontend Developers'
}
let { package } = course;
console.log(package); // undefined
```

уяви що у тебе два курси одночасно 
і тобі потрібно порівняти їх назви

```js
let { name } = courseOne
let { name } = courseTwo
```

так не вийде. другий “нейм” перезапише перший бо у них одна і та сама назва змінної

тому зручно взяти їх значення по ключу “нейм” але записати це значення у змінні із різними назвами:
```js
let { name: firstName } = courseOne
let { name: secondName } = courseTwo

if (firstName === secondName) { … }

it’s the same as 
if (courseOne.name === courseTwo.name) { … }

BUT shorter
```

 Также можно записывать параметры по умолчанию для деструктурированных переменных. Синтаксис похож на синтаксис объявления функций.

```js
let course = {
  name: 'JS Fundamentals for Frontend Developers'
}
let { package = 'full course' } = course;
console.log(package); // full course 
```
те саме що => 
```js
let package = course.package || 'full course'
```
тобто візьми значення **course.package** а якщо його немаж то візьми по замовчуванню **'full course'**. 

Вы даже можете переименовывать переменные при указании параметров по умолчанию. Необходимо составить комбинацию из двух синтаксисов, что сначала будет необычно, но к этому можно привыкнуть:

```js
let course = {
  name: 'JS Fundamentals for Frontend Developers'
}
let { package: packageName = 'full course' } = course;
console.log(packageName); // full course
```
те саме що => 
```js
let packageName = course.package || 'full course'
```