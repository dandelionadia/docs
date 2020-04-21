### Redux

`Component` => `Action` => `Store` => `Reducer` => `Store` => `Component`

### Reducer

_store.ts_

```ts
import { createStore } from "redux";
import { rootReducer } from "./reducers/root.reducer";

export const store = createStore(
  rootReducer,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);
```

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
import { useSelector } from "react-redux";

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

## cartSummary: counts total price

_store.ts_

```js
import { CartState } from "./reducers/cart/cart.state";

export interface AppState {
  cart: CartState;
}
```

_CartPage.tsx_

```js
  const templateTablet = `
    cartItems
    cartTotals
  `
  const templateLg = `
    cartItems cartTotals
    / 1fr auto
  `

  xport const CartPage: React.FC = () => {
  const cart = useSelector<any, any>((state) => state.cart)
  const cartTotal = useSelector<AppState, any>((state) => {
    return state.cart.items.reduce<number>((acc, item) => {
      return acc + getTotalPrice(item)
    }, 0)
  })
  ...
  <Areas.CartTotals>
    <CartSummary subtotalPrice={cartTotal} totalPrice={cartTotal} />
  </Areas.CartTotals>
```

_CartItemsList.tsx_

```js
interface CartItemsListProps {
  items: CartItem[];
}

export const getTotalPrice = (item: CartItem) => {
  return Number((item.price * item.quantity).toFixed(2))
}

export const CartItemsList: React.FC<CartItemsListProps> = ({ items }) => {
  return
```

_CartSummary.tsx_

```js
  interface CartSummaryProps {
    subtotalPrice: number
    totalPrice: number
  }

  export const CartSummary: React.FC<CartSummaryProps> = ({
    subtotalPrice,
    totalPrice,
  }) => {
    return (
      <Box as={StyledCartTotals} widthLg="200px" widthXl="250px">
        <Heading as="h2">Cart totals</Heading>
        <Composition
          templateCols="repeat(2,1fr)"
          paddingVertical="30px"
          as={StyledBoxPrice}
        >
          <span>Subtotal:</span>
          <StyledProductSubtotal>${subtotalPrice}</StyledProductSubtotal>
        </Composition>
        <Composition
          templateCols="repeat(2,1fr)"
          paddingVertical="30px"
          alignItems="center"
          flex
          justifyContent="space-between"
        >
          <span>Total:</span>
          <StyledTotalPrice>${totalPrice}</StyledTotalPrice>
        </Composition>
        <StyledButton>
          <StyledLink href="#">Proceed To Checkout</StyledLink>
        </StyledButton>
      </Box>
    )
  }
```

## Cart: adds action: add to cart; adds products to the cart

_ProductSummary.tsx_

```js
export interface ProductSummaryProps {
  // rating: number
  // price: number
  // description: string
  onAddToCartClick?: () => void;
}

const ProductSummary: React.FC<ProductSummaryProps> = ({
  // ating,
  // price,
  // description,
  onAddToCartClick,
}) => {
  const cartItems = useSelector<AppState, any>((state) => state.cart.items)
  return (
    <Composition max="10" defaultValue="1">
        <Button onClick={onAddToCartClick}>≙ add to card</Button>
    </Composition>
  )
}
```

_ProductPage.tsx_

```js
import { addToCart } from "../../store/reducers/cart/cart.actions";
import { useDispatch } from "react-redux";

const ProductPage: React.FC<
  RouteComponentProps<{
    productId: string,
  }>
> = ({ match }) => {
  const dispatch = useDispatch();
  return <p>Error when fetching product</p>;
};

const handleClick = () => {
  dispatch(addToCart(productId, data.title, data.price));
};

return <ProductSummary onAddToCartClick={handleClick} />;
```

_cart.actions.ts_

```js
import { ADD_TO_CART } from "./types";

export const addToCart = (id: string, title: string, price: number) => {
  return {
    type: ADD_TO_CART,
    id,
    title,
    price,
  };
};
```

_cart.reducer.ts_

```js
import { ADD_TO_CART } from "./types";

export const cartReducer = (state: CartState, action: any) => {
  if (action.type === ADD_TO_CART) {
    console.log("success");
    const nextItems = state.items.concat({
      id: action.id,
      title: action.title,
      price: action.price,
      quantity: 1,
    });

    return {
      items: nextItems,
    };
  }

  return initialState;
};
```

_types.js_

```js
export const ADD_TO_CART = "ADD_TO_CART";
```
