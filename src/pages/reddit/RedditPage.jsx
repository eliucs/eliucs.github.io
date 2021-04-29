/* eslint-disable react/no-danger */
import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';

import {
  setThemeLight,
  setPageThemeLight,
  hamburgerClose,
} from 'actions/NavBarActions';
import {
  menuClose,
} from 'actions/MenuActions';

const RedditPage = ({ dispatch }) => {
  dispatch(setThemeLight());
  dispatch(setPageThemeLight());
  dispatch(hamburgerClose());
  dispatch(menuClose());

  return (
    <div>
      <h1><b>Hello, I&apos;m Eric.</b></h1>
      {/* eslint-disable-next-line max-len */}
      <h2>You are probably here from Reddit. That person is NOT me, they just have the same name as me.</h2>
      <h2>In the meantime, let me serve you some ads.</h2>
    </div>
  );
};

RedditPage.propTypes = {
  dispatch: PropTypes.func,
};

const mapStateToProps = () => ({});

export default compose(
  connect(mapStateToProps),
)(RedditPage);
