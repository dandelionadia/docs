# Connecting React to Redux

_install ..._

## store

#### index.js

```js
import { createStore } from 'redux'
import { reducer } from './sore/reducer'

// pass reducer to createStore
const store = createStore(reducer)

// ReactDOM.render(
// <Provider store={store}>
//    <App />
//  </Provider>,
//   document.getElementById("root")
// );
// registerServiceWorker();
```

## reducer.js

```js
const initialState = {
  counter: 0,
}

export const reducer = (state = initialState, action) => {
  return state
}
```

# Connecting Store to React

```js
npm install --react-redux
```

#### index.js

```js
// import { createStore } from "redux";
import { Provider } from "react-redux";
// import { reducer } from "./sore/reducer";

// pass reducer to createStore
// const store = createStore(reducer);

// ReactDOM.render(
<Provider store={store}>
   <App />
 </Provider>,
//   document.getElementById("root")
// );
// registerServiceWorker();
```

> Provider is helpes componetn which allows us to kind of inject out store into the react componetnts.

#### Counter.js

```js
import { connect } from 'react-redux'
class Counter extends Component {
  render() {
    return (
      <div>
        <CounterOutput value={this.props.ctr} />
      </div>
    )
  }
}
```

```js
const mapStateToProps = (state) => {
  return {
    ctr: state.counter,
  }
}

export default connect(mapStateToProps)(Counter)
```

> this'state' here will be given to you by react-redux which will reach out to your redux 'state'

> `connect` it is a function which returns a higher order component

# Dispatching Actions from within the Component

Component

#### Counter.js

```js
// import { connect } from "react-redux";
// class Counter extends Component {
//   render() {
//     return (
;<div>
  <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />;
</div>
//     );
//   }
// }

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrementCounter: () => dispatch({ type: 'INCREMENT' }),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
```

> if you have a container which only needs to dispatch action but doesn't need a slice of the state, you'll simple pass 'null' as the first argument to connect

```js
export default connect(null, mapDispatchToProps)(Counter)
```

### reducer.js

```js
// const initialState = {
//   counter: 0,
// };

// export const reducer = (state = initialState, action) => {
if (action.type === 'INCREMENT') {
  return {
    counter: state.counter + 1,
  }
}

//   return state;
// };
```
