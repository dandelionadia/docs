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
