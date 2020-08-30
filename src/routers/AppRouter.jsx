import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

import AboutPage from 'pages/about';
import ContactPage from 'pages/contact';
import HomePage from 'pages/home';
import ProjectPage from 'pages/project';
import ProjectsPage from 'pages/projects';

import Irene1Page from 'pages/irene/1';
import Irene2Page from 'pages/irene/2';
import Irene3Page from 'pages/irene/3';
import Irene4Page from 'pages/irene/4';
import Irene5Page from 'pages/irene/5';
import IreneCountdownPage from 'pages/irene/countdown';

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
          component={() => <Irene1Page />}
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
          path="/irene/4"
          component={() => <Irene4Page />}
          exact
        />

        <Route
          path="/irene/5"
          component={() => <Irene5Page />}
          exact
        />

        <Route
          path="/irene/countdown"
          component={() => <IreneCountdownPage />}
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
