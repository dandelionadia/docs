```html
<div id="box">
    <a id="koko" class="click" href="#">Click</a>
  </div>
  ```
  ```css
  .click {
  text-decoration: none;
  color: black;
  border: 1px solid blue;
  display: inline-block;
  padding: 8px 15px;
  border-radius: 10px 100px / 120px;
  background-color: rgb(107, 248, 243);
}
```
```js
$(document).ready(function() {
  function Send() {
    // запрос до серверу
    $.ajax('http://10.0.0.2:8070/photos', {
      // перед подією
      beforeSend: Send_Befor,
      // у разі успіху відповідь із сервера прийде сюди
      success: Send_Success,
      // у разі помилки
      error: Send_Error,
      // після закінчення події
      complete: Send_Complete
    });
  }

  function Send_Befor() {
    $('#box').append('<p id="message">the process goes</p>');
  }

  function Send_Success(res) {
    // дял кожної із фото виконати функцію
    res.photos.forEach(function(photo) {
      console.log(photo.url);
      // додати урл картинки по черзі
      $('#box').append('<img src="' + photo.url + '" />');
    })
    console.log('good job!',  res.photos);
  }

  function Send_Error() {
    console.log('bed job!');
  }

  function Send_Complete() {
    setTimeout(function () {
      $('#message').remove();
    }, 2000);
  }

  $('#koko').click(function() {
    Send();
  })
})
```


«асинхронный запрос» — это когда синхронно (т. е. одновременно) с ним может выполняться другой.

А вот если синхронность отсутствует, и запросы выполняются последовательно друг за другом, то их  называют «синхронными».

AJAX (Asynchronous JavaScript and XML) – позволяет, посредствам JavaScript, выполнять запросы к серверу в фоновом режиме (асинхронно). 
Основной метод для отправки асинхронных запросов в jQuery называется ajax(). Этот метод принимает один обязательный параметры – адрес страницы, на который требуется отправить запрос.
```js
$.ajax("/AjaxHelloWorld.aspx");

```
Однако отправить запрос, это лишь полдела. В большинстве случаев еще нужно бы получить ответ от сервера и вывести его клиенту.Чтобы получить ответ от сервера, нужно добавить параметр **success**, в котором должна быть указана ссылка на функцию JavaScript (имя функции), в которую будет передан успешный ответ сервера.
```js
<script language="javascript" type="text/javascript">
function SendRequest() {
 $.ajax("/AjaxHelloWorld.aspx", {success: SendRequest_Success});
 }

 function SendRequest_Success(result) {
 alert(result);
 }
</script>
 ```
 ```html
<a href="#" onclick="SendRequest();return false;">Отправить асинхронный запрос</a>
```
Как видите в примере выше, при нажатии на ссылку «Отправить асинхронный запрос» происходит вызов клиентской функции – SendRequest, в которой, в свою очередь производится отправка запроса на страницу /AjaxHelloWorld.aspx. В случае успеха, ответ сервера передается в функцию SendRequest_Success. Сервер может возвращать данные в любом текстовом формате, но в данном случае сервер возвращает обычный текст (text/plain), который сразу выводится пользователю в виде сообщения при помощи функции alert.

Но параметр success обрабатывает лишь успешные ответы сервера. Если сервер вернет ошибку, то запрос молча завершит выполнение и вызов функции, указанной в success, не произойдет (SendRequest_Success). Для обработки ошибок предназначен отдельный параметр -  **error**.

```js
<script language="javascript" type="text/javascript">
 function SendRequest() {
 $.ajax("/AjaxHelloWorld.aspx", {success: SendRequest_Success, error: SendRequest_Error});
 }

 function SendRequest_Success(result) {
 alert(result);
 }

 function SendRequest_Error(x, status, message) {
 alert(status + ": " + message);
 }
</script>
```

. Чаще всего в Интернете используются запросы GET и POST. Метод GET предназначен для получения содержимого страниц сайта, а метод POST – для отправки. Ваш браузер отправил запрос методом GET, а если вы захотите добавить комментарий к статье, то ваш браузер отправит его методом POST.

Функция ajax по умолчанию отправляет запросы методом GET. Для изменения метода запроса, достаточно указать его в параметре type.
```js
$.ajax("/AjaxHelloWorld.aspx", {type: "POST" });
```
Коллекцию дополнительных параметров, которые будут переданы на сервер, можно указать в свойстве data.
```js
<script language="javascript" type="text/javascript">
 function SendPostRequest() {
 $.ajax("/AjaxPost.aspx", {type: "POST", data: {name: "Kbyte.Ru", age: 6, url: "http://kbyte.ru"}, success: SendPostRequest_Success });
 }

 function SendPostRequest_Success(result) {
 alert(result);
 }
</script>

<a href="#" onclick="SendPostRequest();return false;">Отправить асинхронный запрос</a>
```
**Для еще более простой отправки асинхронных запросов, в jQuery есть две вспомогательные функции: get и post.**

**GET**
```js
$.get("/AjaxHelloWorld.aspx", EasySendRequest_Success);
```
**POST**
```js
$.post("/AjaxPost.aspx", {name: "Kbyte.Ru", age: 6, url: "http://kbyte.ru"} , EasySendPostRequest_Success);
```
Если для GET-запроса необходимо добавить дополнительные параметры, то это можно сделать, либо через адрес (url):
```js
$.get("/AjaxHelloWorld.aspx?id=1&text=example", EasySendRequest_Success);
```
Либо, как в post-запросе, передать в функцию в виде коллекции:
```js
$.get("/AjaxHelloWorld.aspx", {id: 1, text: "example" }, EasySendRequest_Success);
```
Если для GET-запроса необходимо добавить дополнительные параметры, то это можно сделать, либо через адрес (url):
```js
$.get("/AjaxHelloWorld.aspx?id=1&text=example", EasySendRequest_Success);
```
Либо, как в post-запросе, передать в функцию в виде коллекции:
```js
$.get("/AjaxHelloWorld.aspx", {id: 1, text: "example" }, EasySendRequest_Success);
```
Во всех случаях, успешный (success) ответ сервера будет передан в функцию EasySendRequest_Success. А вот если сервер вернет **ошибку**, то, увы, обработать её этими функциями будет куда сложнее, чем при помощи метода **ajax**.

## Асинхронная загрузка файлов на сервер
Как известно, для загрузки файлов на сервер используется элемент `input` типа `file`. Отправка файлов возможна только методом POST с указанием типа кодирования `multipart/form-data`.

Соответственно, чтобы при отправке файла на сервер страница не перезагружалась, достаточно перенаправить форму во фрейм. Сделать это можно, указав имя фрейма в параметр формы target.
```html
<form method="post" action="/FileUpload.aspx" enctype="multipart/form-data" target="uploadFrame">
 <input type="file" name="file1" />
 <input type="submit" value="Отправить" /><br /><br />
 <iframe id="uploadFrame" name="uploadFrame" src="" style="width:250px;height:75px;border:1px solid #333333;"></iframe>
</form>
```
