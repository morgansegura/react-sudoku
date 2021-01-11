import React, { FC, Children, useCallback, useEffect } from 'react'
import useMousetrap from 'react-hook-mousetrap'
import { useDispatch } from 'react-redux'
import { Dispatch, AnyAction } from 'redux'

import { createGrid } from 'reducers'
import { INDEX } from 'typings'

import Block from './block'
import { Container, Row } from './styles'

const Grid: FC = () => {
	const dispatch = useDispatch<Dispatch<AnyAction>>()
	const create = useCallback(() => dispatch(createGrid()), [dispatch])
	useEffect(() => {
		create()
	}, [create])

	function moveDown() {
		console.log('down')
	}
	function moveLeft() {
		console.log('Left')
	}
	function moveRight() {
		console.log('Right')
	}
	function moveUp() {
		console.log('Up')
	}

	useMousetrap('down', moveDown)
	useMousetrap('left', moveLeft)
	useMousetrap('right', moveRight)
	useMousetrap('up', moveUp)

	return (
		<Container data-cy='grid-container'>
			{Children.toArray(
				[...Array(9)].map((_, rowIndex) => (
					<Row data-cy='grid-row-container'>
						{Children.toArray(
							[...Array(9)].map((_, colIndex) => (
								<Block
									colIndex={colIndex as INDEX}
									rowIndex={rowIndex as INDEX}
								/>
							))
						)}
					</Row>
				))
			)}
		</Container>
	)
}

export default Grid
