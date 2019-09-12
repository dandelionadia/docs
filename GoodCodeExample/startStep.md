- assets

  - global.sass
  - theme.js

### global.sass

```css
@import url("https://fonts.googleapis.com/css?family=Muli:400,800&display=swap");

html {
  font-family: Muli, -apple-system, BlinkMacSystemFont, "Segoe UI", Oxygen, Ubuntu,
    Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  margin: 0;
  padding: 0;
}

h1,
h2,
h3,
h4 {
  margin: 1.5em 0 0.5em;
  line-height: 1.2em;

  &:first-of-type {
    margin-top: 0;
  }
}

h2,
h3 {
  font-weight: normal;
  letter-spacing: -0.02em;
}

h1 {
  font-size: 3rem;
}

h2 {
  margin-bottom: 1.25em;
  font-size: 2rem;
  text-align: center;
  width: 100%;
}

h3 {
  margin-bottom: 1em;
  font-size: 1.5rem;
  font-weight: 500;
}

h4 {
  font-size: 1.2rem;
  font-weight: 400;
}

a {
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
}

code,
pre {
  font-family: "Roboto Mono", Menlo, Monaco, monospace;
}

code {
  padding: 0.1em 0.25em;
  background-color: rgba(255, 229, 100, 0.2);
  border-radius: 3px;
  font-size: 1em;
}

pre {
  overflow-y: auto;
}

p {
  &:first-child,
  h1 ~ &,
  h2 ~ &,
  h3 ~ & {
    margin-top: 0;
  }

  &:last-child {
    margin-bottom: 0;
  }
}

ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

.playground h3 {
  margin: 0;
}
```

### theme

```css
	export default {
  page: {
    backgroundColor: '#fff',
    color: 'hsl(218, 23%, 33%)',
  },
  colors: {
    black: 'hsl(218, 23%, 23%)',
    shadow: (alpha) => `hsla(235, 29%, 67%, ${alpha})`,
    primary: '#7b85ff',
    primaryDim: '#9296c3',
    primaryDark: '#292A3D',
    secondary: '#ccc',
    grayLight: 'hsla(235, 100%, 85%, 0.4)',
    grayDim: 'hsl(235, 85%, 97%)',

    accent: {
      yellow: {
        bgColor: '#fbd38d',
        color: '#9c4221',
      },
      green: {
        bgColor: '#c6f6d5',
        color: '#2f855a',
      },
      blue: {
        bgColor: '#AAE6FF',
        color: '#1F6D8D',
      },
      violet: {
        bgColor: '#D9D0FF',
        color: '#5D47B5',
      },
    },
  },
}
```
