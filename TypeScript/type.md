```js

type Salad = 'salad'
type Potato = 'potato'
type Meat = 'meat'

interface Person<T> {
  name: string
  age: number
  favoriteFood: T
}

const Jack: Person<Meat> = {
  name: 'Jack',
  age: 23,
  favoriteFood: 'meat'
}
const July: Person<Potato> = {
  name: 'July',
  age: 23,
  favoriteFood: 'potato'
}
```
