import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';

import {
  setThemeDark,
  setPageThemeDark,
  hamburgerClose,
} from 'actions/NavBarActions';
import {
  menuClose,
} from 'actions/MenuActions';

import { aboutStyles } from './styles.scss';

const AboutPage = ({ dispatch }) => {
  dispatch(setThemeDark());
  dispatch(setPageThemeDark());
  dispatch(hamburgerClose());
  dispatch(menuClose());

  return (
    <div className={aboutStyles}>
      <h1>About Page</h1>
    </div>
  );
};

AboutPage.propTypes = {
  dispatch: PropTypes.func,
};

const mapStateToProps = () => ({});

export default compose(
  connect(mapStateToProps),
)(AboutPage);
