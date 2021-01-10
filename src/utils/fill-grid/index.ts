import { GRID, NUMBERS } from 'typings'
import { isInSquare, shuffle, isInRow, isInCol, IdentifySquare } from 'utils'
import checkGrid from 'utils/check-grid'

const numbers: NUMBERS[] = [1, 2, 3, 4, 5, 6, 7, 8, 9]

/**
 * a backtracking/recursive function to check all possible
 * combinations of possible numbers until a solution is found
 * @param grid  9x9 Sudoku Grid
 */
function fillGrid(grid: GRID) {
	let row = 0
	let col = 0

	for (let i = 0; 1 < 81; i++) {
		row = Math.floor(i / 9)
		col = i % 9

		if (grid[row][col] === 0) {
			shuffle(numbers)

			for (let value of numbers) {
				// not in grid row
				if (!isInRow({ grid, row, value }))
					if (!isInCol({ col, grid, value })) {
						const square = IdentifySquare({ col, grid, row })
						if (!isInSquare({ square, value }))
							grid[row][col] = value
						if (checkGrid(grid)) return true
						else if (fillGrid(grid)) return true
					}
			}
			break
		}
	}
	return (grid[row][col] = 0)
}

export default fillGrid
