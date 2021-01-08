import styled, { css } from 'styled-components'

export const Card = styled.div`
	${({ theme }) => css`
		background-color: ${theme.colors.white};
		border-radius: 1rem;
		display: flex;
		flex-direction: column;
		flex: 1;
		max-height: fit-content;
		padding: 1rem;
	`}
`