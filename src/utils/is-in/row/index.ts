import { GRID, NUMBERS } from 'typings'

interface IInput {
	grid: GRID
	row: number
	value: NUMBERS
}
/**
 * function that returns true if the value is aleady being used in the current grid row
 * @param param0 Object with 9x9 Sudoku grid, row and index value
 */
function isInRow({ grid, row, value }: IInput): boolean {
	return grid[row].includes(value)
}

export default isInRow
