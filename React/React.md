1.
```js
const rootElement = document.getElementById('root')

const element = React.createElement('div', {
    className: 'container',
    children: 'Hello World',
  })

ReactDOM.render(element, rootElement)
```

2.
```js
const rootElement = document.getElementById('root')

const content = "Hello"
const myClassName = "container"

const element = <div className={myClassName + '__box'}>{content}</div>
ReactDOM.render(element, rootElement)
```

3.
```js
const rootElement = document.getElementById('root')

const props = {
  className: 'name',
  children: 'World'
}

const elementTwo = <div {...props} />
ReactDOM.render(element, rootElement)
```
#
1.
```js
const rootElement = document.getElementById('root')
const message = (props) => <div>{props.msg}</div>

const element = (
  <div className="container">
    {message({msg: "Hello World"})}
    {message({msg: "Goodbye World"})}
  </div>
)

ReactDOM.render(element, rootElement)
```

2.
```js
const rootElement = document.getElementById('root')
const message = (props) => <div>{props.msg}</div>

const element = (
  <div className="container">
    {React.createElement(message, {msg: "Hello World"})}
    {React.createElement(message, {msg: "Goodbye World"})}
  </div>
)

ReactDOM.render(element, rootElement)
```

3.
```js
const rootElement = document.getElementById('root')
const Message = (props) => <div>{props.msg}</div>

const element = (
  <div className="container">
    <Message msg="Hello World"/>
    <Message msg="Goodbye World"/>
  </div>
)

ReactDOM.render(element, rootElement)
```

# React Component
1.
```js
const rootElement = document.getElementById('root')
const element = <Message message={null} />
      
      function Message({message}) {
        if(!message){
           return <div>No message</div>
           }
        return <div>{message}</div>
      }

ReactDOM.render(element, rootElement)
```

```js
const rootElement = document.getElementById('root')
const element = <Message message="Hi" /> // change mwssage
      
      function Message({message}) {
        if(!message){
           return <div>No message</div>
           }
        return <div>{message}</div>
      }

ReactDOM.render(element, rootElement)
```
2.
```js
const rootElement = document.getElementById('root')
const element = <Message message="Hi" />
      
      function Message({message}) {
        if(!message){
           return React.createElement(
             'div', 
             null, 
             'No message')
           }
        return React.createElement(
          'div', 
          null,
          message)
      }

ReactDOM.render(element, rootElement)
```
```js
const rootElement = document.getElementById('root')
const element = <Message message={null} />
      
      function Message({message}) {
        return message 
          ? React.createElement('div', null,message)
          : React.createElement('div', null, 'No message')
      }

ReactDOM.render(element, rootElement)
```
```js
const rootElement = document.getElementById('root')
const element = <Message message={null} />
      
      function Message({message}) {
        return (
          <div>
            {message 
              ? React.createElement('div', null,message)
              : React.createElement('div', null, 'No message')
            }
          </div>
        )    
      }

ReactDOM.render(element, rootElement)
```
3.
```js
const rootElement = document.getElementById('root')
const element = <Message message={"Hi"}/>
      
      function Message({message}) {
        return (
          <div>
            {message 
              ? (<div>{message}</div>)
              : (<div>No Massage</div>)
            }
          </div>
        )    
      }

ReactDOM.render(element, rootElement)
```

# Application

1.
```js
const rootElement = document.getElementById('root')

function tick() {
  const time = new Date().toLocaleTimeString()
  const element = <div>it is {time}</div>
  ReactDOM.render(element, rootElement) 
}

tick()
setInterval(tick, 1000)
```

#

1.
```js
const rootElement = document.getElementById('root')
const element = (
  <div>
    <div className="box box--small" style={{paddingLeft: 20}}>box</div>
  </div> 
)

ReactDOM.render(element, rootElement) 
```
```css
#root {
  font-weight: 600;
  font-size: 1.2rem;
}

.box {
  border: 1px solid red;
  &--small {
    width: 60px;
    height: 60px;
  }
}
```
the same 
```js
const rootElement = document.getElementById('root')
const props = {
  className: "box box--small" ,
  style: {paddingLeft: 20}
}
const element = (
  <div>
    <div {...props}>box</div>
  </div> 
)

ReactDOM.render(element, rootElement) 
```

```js
const rootElement = document.getElementById('root')
function Box({style, ...rest}){
  return (
    <div
      className="box box--small" 
      style={{paddingLeft: 20, ...style}}
      {...rest}
    />
  )
}
const element = (
  <div>
    <Box style={{backgroundColor: 'lightblue'}}>
      small box
    </Box>
  </div> 
)

ReactDOM.render(element, rootElement) 
```
```js
const rootElement = document.getElementById('root')
function Box({style, className, ...rest}){
  return (
    <div
      className={`box ${className}`}
      style={{paddingLeft: 20, ...style}}
      {...rest}
    />
  )
}
const element = (
  <div>
    <Box 
      className="box--small"
      style={{backgroundColor: 'lightblue'}}>
      small box
    </Box>
  </div> 
)

ReactDOM.render(element, rootElement) 

```
cool
```js
const rootElement = document.getElementById('root')
function Box({style, size, className, ...rest}){
  const sizeClassName = size ? `box--${size}` : ''
  return (
    <div
      className={`box ${className} ${sizeClassName}`}
      style={{paddingLeft: 20, ...style}}
      {...rest}
    />
  )
}
const element = (
  <div>
    <Box 
      size="small"
      style={{backgroundColor: 'lightblue'}}>
      small box
    </Box>
    <Box 
      size="medium"
      style={{backgroundColor: 'pink'}}>
      medium box
    </Box>
    <Box 
      size="large"
      style={{backgroundColor: 'orange'}}>
      large box
    </Box>
  </div> 
)

ReactDOM.render(element, rootElement) 
```

#
1.
```js
const getElement = document.getElementById('root')

function formatName(index) {
   return index ? index.firstName + ' ' + index.lastName : undefined
}

const user = {
  firstName: "Nadiia",
  lastName: "Ridko",
}

const element = <h1>Hello, {formatName(user)}</h1>;
ReactDOM.render(element, getElement)
```

2.
```js
const rootElement = document.getElementById('root')

function Img({size, className, ...rest}) {
  const sizeClassName= size ? `box--${size}` : ''
  return (
    <img 
      className={`box ${className} ${sizeClassName}`}
      style={{marginTop: 20}}
      {...rest}
      />
  )
}

const srcElement = {
  src: 'https://cfvod.kaltura.com/p/1836881/sp/183688100/thumbnail/entry_id/0_g8zctc7p/version/100012/width/600/height/400'
}

const element = (
  <div>
    <Img 
        size="small"              
        src={srcElement.src}>
    </Img>
    <Img 
        size="medium"       
        src={srcElement.src}>
    </Img>
    <Img 
        size="large"              
        src={srcElement.src}>
    </Img>
  </div>
)
ReactDOM.render(element, rootElement)
```
#
1.
```js
const getElement = document.getElementById('root')
const state = {eventCount: 0, username: ''}

function App() {
  return (
    <div>
      <p>The have been {state.eventCount} events</p>
      <p>
        <button 
          onClick={increment}
          >btn
        </button>
      </p>
      <p>You tiped: {state.username}</p>
      <p>
        <input
          onChange={updateUsername}
          />
      </p>
    </div>
  )
}

function increment() {
  setState({
    eventCount: state.eventCount +1,
  })
}

function updateUsername(event){
  console.log(event)
  setState({
    username: event.target.value,    
  })
}
// setState({eventCount: 10})
// setState({username: 'bob'})

function setState(newState) {
  Object.assign(state, newState)
  renderApp()
}

function renderApp() {
  ReactDOM.render(
    <App/>,
    getElement)
}

renderApp()
```

2.
```js
class StopWatch extends React.Component {
  state = {lapse: 0, running: false}
  handleRunClick = () => {
    this.setState(state => {
      if (state.running) {
        clearInterval(this.timer)
      } else {
        const startTime = Date.now() - this.state.lapse
        this.timer = setInterval(() => {
          this.setState({
            lapse: Date.now() - startTime,
          })
        })
      }
      return {running: !state.runnnig}
    })
  }
  handleClearClick = () => {
    clearInterval(this.timer)
    this.setState({lapse: 0, running: false})
  }
  
    render() {
    const {lapse, running} = this.state
    const buttonStyles = {
      border: '1px solid #ccc',
      background: '#fff',
      fontSize: '2em',
      padding: 15,
      margin: 5,
      width: 200,
  }
  return (
    <div style={{textAlign: 'center'}}>
      <label style={{fontSize: '5em', display: 'block'}}>{lapse}ms</label>
      <button onClick={this.handleRunClick} style={buttonStyles}>{running ? 'Stop' : 'Start'}</button>
      <button onClick={this.handleClearClick} style={buttonStyles}>Clear</button>
    </div>
  )
  }
}

const element = <StopWatch/>
const getElement = document.getElementById('root')
ReactDOM.render(
  element, getElement
)
```
#
```js
const myNews = [
  {
    id: 1, // добавили id
    author: 'Саша Печкин',
    text: 'В четверг, четвертого числа...'
  },
  {
    id: 2,
    author: 'Просто Вася',
    text: 'Считаю, что $ должен стоить 35 рублей!'
  },
  {
    id: 3,
    author: 'Max Frontend',
    text: 'Прошло 2 года с прошлых учебников, а $ так и не стоит 35'
  },
  {
    id: 4,
    author: 'Гость',
    text: 'Бесплатно. Без смс, про реакт, заходи - https://maxpfrontend.ru'
  }
];

class News extends React.Component {
  render() {
    const newsTemplate = this.props.data.map(function(item) {
      return (
        <div key={item.id}> {/* используем id в качестве ключа */}
          <p className="news__author">{item.author}:</p>
          <p className="news__text">{item.text}</p>
        </div>
      )
    })

    return (
      <div className="news">
        {newsTemplate}
      </div>
    )
  }
}
```

#
```js
const myNews = [
  {
    id: 1,
    author: 'Саша Печкин',
    text: 'В четверг, четвертого числа...'
  },
  {
    id: 2,
    author: 'Просто Вася',
    text: 'Считаю, что $ должен стоить 35 рублей!'
  },
  {
    id: 3,
    author: 'Max Frontend',
    text: 'Прошло 2 года с прошлых учебников, а $ так и не стоит 35'
  },
  {
    id: 4,
    author: 'Гость',
    text: 'Бесплатно. Без смс, про реакт, заходи - https://maxpfrontend.ru'
  }
];

class News extends React.Component {
  render() {
    const newsTempalete = this.props.data.map(function(item) {
      return (
        <div key={item.id}>
          <p className="news__author">{item.author}:</p>
          <p className="news__text">{item.text}</p>
        </div>
      )
    })
    return (
      <div className="news">
        {newsTempalete}
      </div>
    )
  }
}

const Comments = () => {
  return <p>Нет новостей - комментировать нечего.</p>
}

const App = () => {
  return (
    <React.Fragment>
      <News data={myNews}/>
      <Comments />
    </React.Fragment>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
```