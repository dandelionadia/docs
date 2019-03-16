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