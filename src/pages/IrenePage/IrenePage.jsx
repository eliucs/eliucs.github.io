/* eslint-disable react/no-danger */
import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';

import Config from 'configuration';
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

const IrenePage = ({ dispatch }) => {
  dispatch(setThemeLight());
  dispatch(setPageThemeLight());
  dispatch(hamburgerClose());
  dispatch(menuClose());

  return (
    <div className={ireneBackgroundStyles}>
      <div className={ireneTextContainerStyles}>
        <DisappearingText
          charset={Config.get('irene.disappearingText.charset')}
          data={Config.get('irene.disappearingText.data')}
          length={Config.get('irene.disappearingText.length')}
          timeDelay={Config.get('irene.disappearingText.timeDelay')}
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
