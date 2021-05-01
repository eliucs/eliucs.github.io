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
  hamburgerClose,
} from 'actions/NavBarActions';
import {
  menuClose,
} from 'actions/MenuActions';
import HomeLinks from 'components/HomeLinks';

import {
  homeBackgroundStyles,
  homeTextContainerStyles,
  homeTextDescriptionStyles,
} from './styles.scss';

const HomePage = ({ dispatch }) => {
  dispatch(setThemeLight());
  dispatch(setPageThemeLight());
  dispatch(hamburgerClose());
  dispatch(menuClose());

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
          <HomeLinks
            profile={Config.get('profileCard')}
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
