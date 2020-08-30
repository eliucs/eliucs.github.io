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
  irene1BackgroundStyles,
  irene1TextContainerStyles,
} from './styles.scss';

const Irene1Page = ({ dispatch }) => {
  dispatch(setThemeLight());
  dispatch(setPageThemeLight());
  dispatch(hamburgerClose());
  dispatch(menuClose());

  return (
    <div className={irene1BackgroundStyles}>
      <div className={irene1TextContainerStyles}>
        <DisappearingText
          charset={Config.get('irene1.disappearingText.charset')}
          data={Config.get('irene1.disappearingText.data')}
          length={Config.get('irene1.disappearingText.length')}
          timeDelay={Config.get('irene1.disappearingText.timeDelay')}
        />
      </div>
    </div>
  );
};

Irene1Page.propTypes = {
  dispatch: PropTypes.func,
};

const mapStateToProps = () => ({});

export default compose(
  connect(mapStateToProps),
)(Irene1Page);
