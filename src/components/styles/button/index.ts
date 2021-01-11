import styled, { css } from 'styled-components'

export const Button = styled.button`
	${({ theme }) => css`
		align-items: center;
		background-color: ${theme.colors.black};
		border: 2px solid ${theme.colors.black};
		border-radius: 0.25rem;
		color: ${theme.colors.white};
		cursor: pointer;
		display: flex;
		flex: 1;
		font-size: 1rem;
		font-weight: bold;
		height: 40px;
		justify-content: center;
		margin: 4px 2px;
		min-height: 40px;
		opacity: 0.9;
		transition: ${theme.transition};

		&:focus {
			border-color: ${theme.colors.blue};
			outline: none;
		}
		&:hover {
			opacity: 0.6;
		}
	`}
`
