/* eslint-disable react/no-danger */
import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';

import FingersTouching from 'components/FingersTouching';
import {
  setThemeLight,
  setPageThemeLight,
  hamburgerClose,
} from 'actions/NavBarActions';
import {
  menuClose,
} from 'actions/MenuActions';

import {
  irene2BackgroundStyles,
  irene2ContainerStyles,
} from './styles.scss';

const Irene2Page = ({ dispatch }) => {
  dispatch(setThemeLight());
  dispatch(setPageThemeLight());
  dispatch(hamburgerClose());
  dispatch(menuClose());

  return (
    <div className={irene2BackgroundStyles}>
      <div className={irene2ContainerStyles}>
        <FingersTouching />
      </div>
    </div>
  );
};

Irene2Page.propTypes = {
  dispatch: PropTypes.func,
};

const mapStateToProps = () => ({});

export default compose(
  connect(mapStateToProps),
)(Irene2Page);
