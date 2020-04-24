## adds theme to the progect

_theme.tsx_

```js
export default {
  colors: {
    blueLight: "#95d1d9",
    blue: "#13183D",
    blueDark: "#1d2f3a",
    yellowLight: "#eeeadc",
    yellow: "#fdf155",
    grey: "#bcbec1",
  },
};
```

_styled-components.d.ts_

```js
import theme from "./src/theme";

type ThemeInterface = typeof theme;

declare module "styled-components" {
  interface DefaultTheme extends ThemeInterface {}
}
```

_tsconfig.jsin_

```js
 "include": [ "styled-components.d.ts"]
```

_Text.ts_

````js
  export const Text =styled.p<TextProps>`
  		color: ${({ theme }) => theme.colors.blue};
	`;
```
````

_index.rsx_

```js
import { ThemeProvider } from "styled-components";
import theme from "./theme";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
```
