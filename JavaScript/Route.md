# Routing

Routing is a method of showing a different content for different URLs. In React routing can be done using routing libraries like `react-router` or `reach-router`.

We will use `react-router` in the examples below.

> See [React Router documentation](https://reacttraining.com/react-router/web/guides/quick-start) on how to install it.

## Basic routing

Let's say we have 2 pages:

```jsx
// src/pages/Homepage.js
import React from "react";

const Homepage = () => <h1>Homepage</h1>;

export default Homepage;
```

```jsx
// src/pages/About.js
import React from "react";

const About = () => <h1>About</h1>;

export default About;
```

We can render a different page based on the URL. To do that we need to create a router.

### Create a router

To create a router let's go to the root of our application (usually `App.js`):

```jsx
// src/App.js
import React from "react";
// Need to import these components from React Router
import { Router, Switch, Route } from "react-router-dom";
// Import our pages
import Homepage from "./pages/Homepage";
import About from "./pages/About";

const App = () => (
  // Render the <Router> component
  <Router>
    {/* Use switch to render the first matched route */}
    <Switch>
      {/* Describe the path (URL pattern) and what to render */}
      <Route path="/" exact component={Homepage} />
      <Route path="/about" component={About} />
    </Switch>
  </Router>
);

export default App;
```

> Notice that we use `exact` prop on the Homepage route. If we don't all other routes that start from `/` will render Homepage.

### Navigating between routes

To navigate between routes we need to use the `Link` component from React Router.

Let's modify our `Homepage` to have a link to the `About` page:

```jsx
// src/pages/Homepage.js
import React from "react";
import { Link } from "react-router-dom";

const Homepage = () => (
  <>
    <h1>Homepage</h1>
    <Link to="/about">Go to About page</Link>
  </>
);

export default Homepage;
```

Now when we click on the link we will go to the `About` page.
