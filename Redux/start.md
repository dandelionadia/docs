# 1

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

### Passing and Retrieving Data with Action

#### Counter.js

```js
const mapDispatchToProps = (dispatch) => {
  return {
    // onAddCounter: () => dispatch({ type: 'ADD'}) <- was
    onAddCounter: () => dispatch({ type: 'ADD', value: 10 }),
}
```

#### reduser.js

```js
case 'ADD':
      return {
        ...state,
        counter: state.counter + action.value,
      }
```

# code

index.js

```js
import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import { reducer } from './sore/reducer'

const store = createStore(reducer)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
```

App.js

```js
import React, { Component } from 'react'

import Counter from './containers/Counter/Counter'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Counter />
      </div>
    )
  }
}

export default App
```

reduser.js

```js
const initialState = {
  counter: 0,
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        counter: state.counter + 1,
      }
    case 'DECREMENT':
      return {
        ...state,
        counter: state.counter - 1,
      }
    case 'ADD':
      return {
        ...state,
        counter: state.counter + action.value,
      }
    case 'SUBTRACT':
      return {
        ...state,
        counter: state.counter - action.value,
      }
  }

  return state
}
```

Counter.js

```js
import React, { Component } from 'react'
import { connect } from 'react-redux'

import CounterControl from '../../components/CounterControl/CounterControl'
import CounterOutput from '../../components/CounterOutput/CounterOutput'

class Counter extends Component {
  render() {
    return (
      <div>
        <CounterOutput value={this.props.ctr} />
        <CounterControl
          label="Increment"
          clicked={this.props.onIncrementCounter}
        />
        <CounterControl
          label="Decrement"
          clicked={this.props.onDecrementCounter}
        />
        <CounterControl label="Add 10" clicked={this.props.onAddCounter} />
        <CounterControl
          label="Subtract 5"
          clicked={this.props.onSubtractCounter}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    ctr: state.counter,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrementCounter: () => dispatch({ type: 'INCREMENT' }),
    onDecrementCounter: () => dispatch({ type: 'DECREMENT' }),
    onAddCounter: () => dispatch({ type: 'ADD', value: 10 }),
    onSubtractCounter: () => dispatch({ type: 'SUBTRACT', value: 5 }),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
```

# 2

## Updating State Immutably

Counter.js

```js
const mapDispatchToProps = (dispatch) => {
  return {
    onStoreResult: () => dispatch({ type: 'STORE_RESULT' })
}
```

Counter.js

```js
class Counter extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.onStoreResult}>Store Result</button>
        <ul>
          <li></li>
        </ul>
      </div>
    )
  }
}
```

reducer.js

```js
const initialState = {
  counter: 0,
  results: [],
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'STORE_RESULT':
      return {
        ...state,
        results: state.results.concat({ id: new Date(), value: state.counter }),
      }
  }

  return state
}
```

Counter.js

```js
const mapStateToProps = (state) => {
  return {
    // ctr: state.counter,
    storedResults: state.results,
  }
}
```

Counter.js

```js
class Counter extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.onStoreResult}>Store Result</button>
        <ul>
          {this.props.storedResults.map((strResult) => (
            <li key={strResult.id}>{strResult.value}</li>
          ))}
        </ul>
      </div>
    )
  }
}
```

# 3

## Updating Arrays Immutably

Counter.js

```js
const mapDispatchToProps = (dispatch) => {
  return {
    onDeleteResult: (id) =>
      dispatch({ type: 'DELETE_RESULT', resultsElId: id }),
  }
}
```

reducer.js

```js
const initialState = {
  counter: 0,
  results: [],
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'DELETE_RESLT':
      // does not touch the old array, returns  a new one
      const updatedArray = state.results.filter(
        (result) => result.id !== action.resultsElId
      )
      return {
        ...state,
        results: updatedArray,
      }
  }

  return state
}
```

Counter.js

```js
<ul>
  {this.props.storedResults.map((strResult) => (
    <li
      key={strResult.id}
      onClick={() => this.props.onDeleteResult(strResult.id)}
    >
      {strResult.value}
    </li>
  ))}
</ul>
```
