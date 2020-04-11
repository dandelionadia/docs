### Redux

`Component` => `Action` => `Store` => `Reducer` => `Store` => `Component`

### Reducer

_root.reducer.ts_

```ts
import { combineReducers } from "redux";
import { cartReducer } from "./cart/cart.reducer";

export const rootReducer = combineReducers({
  cart: cartReducer,
});
```

_cart.reducer.ts_

```ts
import { CartState, initialState } from "./cart.state";

export const cartReducer = (state: CartState, action: any) => {
  return initialState;
};
```

_cart.state.ts_

```ts
export interface CartState {
  items: CartItem[];
}

export interface CartItem {
  id: string;
  title: string;
  price: number;
  quantity: number;
}

export const initialState: CartState = {
  items: [
    {
      id: "1",
      title: "Foo",
      price: 20.2,
      quantity: 1,
    },
    {
      id: "2",
      title: "Name Too",
      price: 2560.2,
      quantity: 3,
    },
  ],
};
```

_CartPage.tsx_

```tsx
export const CartPage: React.FC = () => {
  const cart = useSelector<any, any>((state) => state.cart);

  return (
    <>
      <CartItemsList items={cart.items} />
    </>
  );
};
```

_CartItemsList.tsx_

```tsx
	interface CartItemsListProps {
		items: CartItem[]
	}

	const getTotalPrice = (item: CartItem) =>
		(item.price * item.quantity).toFixed(2)

	export const CartItemsList: React.FC<CartItemsListProps> = ({ items }) => {
		return (
			<div>
				{items.map((item) => (
					<span>{item.title}</span>
					<span>${item.price}</span>
					...
				))}
			</div>
		)
	}
```
