#### rest IPA

```js
'https://server.com'

REST

- method (GET, POST, DELETE, ...)
- path
- responses ('status code', 'headers')

//

fetch('/books') // [{...}, {...}]
fetch('/books', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    title: 'Magician'
  }) // "{"title":"Magician"}"
})

fetch('/books', {
  method: 'DELETE',
  body: 'abc-123'
})
```
