import React from 'react';
import PropTypes from 'prop-types';
import { homeStyles } from './styles.scss';

const HomePage = props => (
  <div className={homeStyles}>
    <h1>Home Page</h1>
  </div>
);

HomePage.propTypes = {};

export default HomePage;
