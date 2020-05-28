## Named export

reducers/counter.js

```js
export const reducer = () {
	return (...)
}
```

reducers.result.js

```js
export const reducer = () {
	return (...)
}
```

index.js

```js
import { reducer as counterReducer } from './sore/reducers/counter'
import { reducer as resultReducer } from './sore/reducers/result'
```

## Default export

reducers/counter.js

```js
const reducer = () {
	return (...)
}

export default reducer
```

reducers.result.js

```js
export const reducer = () {
	return (...)
}

export default reducer
```

index.js

```js
import counterReducer from './sore/reducers/counter'
import resultReducer from './sore/reducers/result'
```
