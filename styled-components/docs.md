## Primary

```js
const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${(props) => (props.primary ? "palevioletred" : "white")};
  color: ${(props) => (props.primary ? "white" : "palevioletred")};
  margin: 1em;
  padding: 0.25em 1em;
`;
render(
  <div>
    <Button>Normal</Button>
    <Button primary>Primary</Button>
  </div>
);
```

## Styling any component

```js
const Link = ({ className, children }) => (
  <a className={className}>{children}</a>
);

const StyledLink = styled(Link)`
  color: palevioletred;
  font-weight: bold;
`;

render(
  <div>
    <Link>Unstyled, boring Link</Link>
    <br />
    <StyledLink>Styled, exciting Link</StyledLink>
  </div>
);
```

## 1. as={..}

when you want the same style but with different tag

```js
const Button = styled.button`
  background-color: ${({ kind }) =>
    kind === "primary" ? "green" : "transparent"};
  border-radius: ${(props) => (props.noBorderRadius ? 0 : "2rem")};
`;
```

```js
<Button as="a" href="/">
  Link with Button styles
</Button>
```

## 2. styled(...)

It creates new komponent based on existing component.

```js
const Button = styled.button`
  display: inline-block;
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  display: block;
`;

const TomatoButton = styled(Button)`
  color: tomato;
  border-color: tomato;
  // these styles add to the styles of button.
  // any same styles will be overwritten.
`;

<Button>Normal Button</Button>
<TomatoButton>Tomato Button</TomatoButton>
```

## 3. kind

```js
${({ kind }) => kind === 'primary' && `
		color: red;
	`}

${({ kind }) => kind === 'secondary' && `
  color: blue;
`}
```

```js
const Button = styled.button`
  background-color: ${({ kind }) =>
    kind === "primary" ? "green" : "transparent"};
  border-radius: ${(props) => (props.noBorderRadius ? 0 : "2rem")};

  ${({ kind }) =>
    kind === "primary" &&
    `
		color: red;
	`}

  ${({ kind }) =>
    kind === "secondary" &&
    `
		color: blue;
	`}
`;
```

```js
<Button kind="primary" noBorderRadius />
<Button kind="secondary"/>
```

### noBorderRadius

When just one proparty different

```js
border-radius: ${props => (props.noBorderRadius ? 0 : "2rem")};
```

### ? :

```js
background-color: ${({ kind }) =>
		kind === "primary" ? "green" : "transparent"};
```

#### 4.You can use the "as"

```js
const Button = styled.button`
  display: inline-block;
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  display: block;
`;
const TomatoButton = styled(Button)`
  color: tomato;
  border-color: tomato;
`;
render(
  <div>
    <Button>Normal Button</Button>
    <Button as="a" href="/">
      Link with Button styles
    </Button>
    <TomatoButton as="a" href="/">
      Link with Tomato Button styles
    </TomatoButton>
  </div>
);
```
