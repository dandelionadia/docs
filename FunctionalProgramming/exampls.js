const addTwo = a => a + 2
addTwo(3) // 5

// const bar = b => addTwo(b)
const bar = addTwo
// const bar = a => a + 2

// 					8 => addTwo(8)
bar(8) // 10

const handleClick = (event) => {
	// ...

}

<input onClick={(event) => handleClick(event)}
<input onClick={handleClick}

