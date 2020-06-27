[example from: kettanaito](https://github.com/dandelionadia/mswjs.io/blob/ff6099c213ef07df0a9c7d91316cca4c9305b541/src/components/BaseLayout.tsx)

```js
export default {
  colors: {
    primary: 'hsl(28, 83%, 64%)',
    primaryDark: 'hsl(28, 16%, 20%)',
    primaryDim: 'hsla(28, 83%, 64%, 0.3)',
    secondary: 'hsl(210, 75%, 45%)',
    grayDim: 'hsl(210, 20%, 96%)',
    grayLight: 'hsl(210, 16%, 80%)',
    gray: 'hsl(210, 9%, 43%)',
    grayDark: 'hsl(210, 18%, 24%)',

    black: 'hsl(220, 18%, 20%)',
    danger: 'hsl(0, 90%, 60%)',
  },
}
```

```js
import React from 'react'
import { ThemeProvider, createGlobalStyle } from 'styled-components'

import theme from '../theme'
import './layout.css'
import './custom.scss'

const GlobalStyle = createGlobalStyle`
  html {
    ${({ theme }) =>
      Object.keys(theme.colors)
        .map((colorName) => {
          return `--color-${colorName
            .replace(/([A-Z])/, '-$1')
            .toLowerCase()}: ${theme.colors[colorName]}`
        })
        .join(';')}
  }
`

export const BaseLayout: React.FC = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  )
}
```
