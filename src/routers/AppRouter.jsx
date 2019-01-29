import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

import AboutPage from 'pages/AboutPage';
import ContactPage from 'pages/ContactPage';
import HomePage from 'pages/HomePage';
import ProjectPage from 'pages/ProjectPage';
import ProjectsPage from 'pages/ProjectsPage';
import NavBar from 'components/NavBar';

/**
 * Renders the AppRouter stateless functional component.
 */
const AppRouter = () => (
  <BrowserRouter>
    <div>
      <NavBar />

      <Switch>
        <Route
          path="/"
          component={() => <HomePage />}
          exact
        />

        <Route
          path="/about"
          component={() => <AboutPage />}
          exact
        />

        <Route
          path="/contact"
          component={() => <ContactPage />}
          exact
        />

        <Route
          path="/projects"
          component={() => <ProjectsPage />}
          exact
        />

        <Route
          path="/projects/:projectId"
          component={() => <ProjectPage />}
          exact
        />

        <Route
          path="*"
          component={() => <Redirect to="/" />}
        />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
