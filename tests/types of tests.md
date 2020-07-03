# Testing

> The first thing you need to understand about different types of tests is that they all have a job to do. They play important roles in continuous delivery.

### Types:

- **Unit tests** ensure that individual components work in isolation from each other. Units are typically modules, functions, etc…

- **Integration tests** ensure that various units work together correctly.

- **Functional tests** ensure that the app works as expected from the user’s perspective.

> Functional tests are sometimes called **end-to-end** tests because they test the entire application, and it’s hardware and networking infrastructure, from the front end UI to the back end database systems. In that sense, functional tests are also a form of **integration testing**, ensuring that machines and component collaborations are working as expected.

- **Smoke Tests** test all the critical functionality in your app: The stuff that most users will encounter in a typical session.

### During continuous integration, tests are frequently used in three ways:

- **During development**, for developer feedback. Unit tests are particularly helpful here.

- **In the staging environment**, to detect problems and stop the deploy process if something goes wrong. Typically the full suite of all test types are run at this stage.

- **In the production environment**, a subset of production-safe functional tests known as smoke tests are run to ensure that none of the critical functionality was broken during the deploy process.
