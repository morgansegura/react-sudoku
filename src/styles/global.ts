import {createGlobalStyle, css} from 'styled-components'


export default createGlobalStyle`
    ${props => css`
        html, body {
            height: 100%;
            margin: 0;
            padding: 0;
        }
        body {
            display: flex;
            flex-direction: column;
            background-color: ${props.theme.colors.black};
            font-family: ${props.theme.fonts.sans}, sans-serif;

            #root {
                background: ${props.theme.colors.background};
                color: ${props.theme.colors.black};
                display: flex;
                height: 100%;
                justify-content: center;
                padding: 1rem;
            }
        }
    `}
`