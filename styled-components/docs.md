## 1. as={..}

when you want the same style but with different tag

```js
const Button = styled.button`
  padding: 0.25rem 0.5rem;
  background-color: ${({ kind }) =>
    kind === "primary" ? "green" : "transparent"};
  border-radius: ${props => (props.noBorderRadius ? 0 : "2rem")};
  border: 2px solid #fff;
  color: #fff;
`;
```

```js
<Button as="a" />
```

## 2. styled(...)

It creates new komponent based on existing component.

```js
const Foo = styled(Button)`
  // these styles add to the styles of button.
  // any same styles will be overwritten.
`;
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
  padding: 0.25rem 0.5rem;
  background-color: ${({ kind }) =>
    kind === "primary" ? "green" : "transparent"};
  border-radius: ${props => (props.noBorderRadius ? 0 : "2rem")};
  border: 2px solid #fff;
  color: #fff;

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
