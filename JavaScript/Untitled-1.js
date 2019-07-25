const one = {
	add: (number) => number + 1
}

const two = {
	// another: (number) => one.add(number)
	another: one.add,
}

two.another // number => number + 1
two.another(2) // 3
// one.add(2)

handleChange = (event) => {
	this.setState
}

<input onChange={this.handleChange}
