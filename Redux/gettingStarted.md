## Getting started with `Redux`

#### Installation

```
# NPM
npm install redux

# Yarn
yarn add redux
```

#### Add `Provider`

> wrapping your entire application in a <Provider> component to make the store available throughout the component tree

```js
import { store } from "../store/store";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
```

#### types

src/store/reducers/cart/types.js

```js
export const DELETE_FROM_CART = "DELETE_TO_CART";
```

### `store`

#### action

src/store/reducers/cart/cart.action.ts

```js
import {DALETE_TO_CART} from './types'

export const deleteFromCart = (id: string) => {
	return {
		types: DELETE_FROM_CART,
		id.
	}
}

```

#### cart.reducer.ts

src/store/reducers/cart/cart.reducer.ts

```js
import { CartState, initialState } from "./cart.state";

export const cartReducer = (state, action) => {
  if (action.type === DELeTE_FROM_CART) {
    //do sth
  }
};
```

#### root.reducer

src/store/reducers/root.reducer.ts

```js
import { combineReducers } from "redux";
import { cartReducer } from "./cart/cart.reducer";

export const rootReducer = combineReducers({
  cart: cartReducers,
});
```

#### store.ts

src/store/

```js
import { createStore, applyMiddleware, compose } from "redux";
import { rootReducer } from './reducers/root.reducer'
import { CartState } from './reducers/cart/cart.state'

const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(rootReducer, composeEnhancers();

```
