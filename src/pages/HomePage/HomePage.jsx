/* eslint-disable react/no-danger */
import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';

import Config from 'configuration';
import InteractiveText from 'components/InteractiveText';
import {
  setThemeLight,
  setPageThemeLight,
} from 'actions/NavBarActions';

import {
  homeBackgroundStyles,
  homeTextContainerStyles,
  homeTextDescriptionStyles,
} from './styles.scss';

const HomePage = ({ dispatch }) => {
  dispatch(setThemeLight());
  dispatch(setPageThemeLight());

  return (
    <div className={homeBackgroundStyles}>
      <div className={homeTextContainerStyles}>
        <div>
          <InteractiveText
            data={Config.get('interactiveText.data')}
            timeDelay={Config.get('interactiveText.timeDelay')}
          />
          <div
            className={homeTextDescriptionStyles}
            dangerouslySetInnerHTML={{ __html: Config.get('profileCard.description') }}
          />
        </div>
      </div>
    </div>
  );
};

HomePage.propTypes = {
  dispatch: PropTypes.func,
};

const mapStateToProps = () => ({});

export default compose(
  connect(mapStateToProps),
)(HomePage);
