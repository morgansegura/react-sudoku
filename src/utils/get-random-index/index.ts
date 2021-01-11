/**
 * Return a random sudoku index in the 0 -8 ranges
 */
function getRandomIndex() {
	return Math.floor(Math.random() * Math.floor(9))
}

export default getRandomIndex
