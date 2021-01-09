import styled, { css } from 'styled-components'

export const Card = styled.div`
	${({ theme }) => css`
		background-color: ${theme.colors.white};
		border-radius: 1rem;
		display: flex;
		flex-direction: column;
		padding: 1rem;
	`}
`
