```js
const date = new Date(song.duration_ms)
const duration =
	date.getMinutes() +
	':' +
	date
		.getSeconds()
		.toString()
		.padStart(2, '0')


<Song
imageUrl={song.album.images[2].url}
title={song.name}
duration={duration}
/>
```

Метод **padStart()** заполняет текущую строку другой строкой (несколько раз, если нужно) так, что итоговая строка достигает заданной длины. Заполнение осуществляется в начале (слева) текущей строки.

#### СинтаксисРаздел

```
str.padStart(targetLength [, padString])
```

`targetLength`
Длина итоговой строки после дополнения текущей строки. Если значение меньше, чем длина текущей строки, текущая строка будет возвращена без изменений.

`padString` Необязательный
Строка. Если эта строка слишком длинная для заданной длины, она будет обрезана..
