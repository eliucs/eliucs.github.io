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
import IrenePage from 'pages/IrenePage';
import Irene2Page from 'pages/Irene2Page';
import Irene3Page from 'pages/Irene3Page';

import NavBar from 'components/NavBar';
import Menu from 'components/Menu';

/**
 * Renders the AppRouter stateless functional component.
 */
const AppRouter = () => (
  <BrowserRouter>
    <div>
      <NavBar />
      <Menu />

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
          path="/irene/1"
          component={() => <IrenePage />}
          exact
        />

        <Route
          path="/irene/2"
          component={() => <Irene2Page />}
          exact
        />

        <Route
          path="/irene/3"
          component={() => <Irene3Page />}
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
