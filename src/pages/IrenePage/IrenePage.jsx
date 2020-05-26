/* eslint-disable react/no-danger */
import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';

import DisappearingText from 'components/DisappearingText';
import {
  setThemeLight,
  setPageThemeLight,
  hamburgerClose,
} from 'actions/NavBarActions';
import {
  menuClose,
} from 'actions/MenuActions';

import {
  ireneBackgroundStyles,
  ireneTextContainerStyles,
} from './styles.scss';

const IRENE_DATA = ['no', 'u'];

const IrenePage = ({ dispatch }) => {
  dispatch(setThemeLight());
  dispatch(setPageThemeLight());
  dispatch(hamburgerClose());
  dispatch(menuClose());

  return (
    <div className={ireneBackgroundStyles}>
      <div className={ireneTextContainerStyles}>
        <DisappearingText
          data={IRENE_DATA}
          timeDelay={150}
        />
      </div>
    </div>
  );
};

IrenePage.propTypes = {
  dispatch: PropTypes.func,
};

const mapStateToProps = () => ({});

export default compose(
  connect(mapStateToProps),
)(IrenePage);
