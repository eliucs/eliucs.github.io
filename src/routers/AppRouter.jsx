/* eslint-disable */

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

import WordCountPage from 'pages/utils/wc';

import NavBar from 'components/NavBar';
import Menu from 'components/Menu';
import ImportantModal from 'components/ImportantModal';

/**
 * Renders the AppRouter stateless functional component.
 */
const AppRouter = () => (
  <BrowserRouter>
    <div>
      <NavBar />
      <Menu />

      {/*

        IMPORTANT: MAY 1 2021

        This modal displays an important message to all new visitors to my personal website.

        Around Apr 28 2021, another student at Waterloo also with the same name "Eric Liu"
        became the subject of an online harassment campaign on the r/uwaterloo subreddit.

        Unfortunately, because I have the same name, I was mistakenly targetted with harassment
        and hate messages, and got caught in the cross-fire. This notice will stay up for the time
        being until the r/uwaterloo subreddit content is adequately addressed.

        IMPORTANT: JUNE 6 2021

        Going to take this notice down now.

      */}
      {/* <ImportantModal /> */}

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
          path="/utils/wc"
          component={() => <WordCountPage />}
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
