import React from 'react';
import PropTypes from 'prop-types';

import Config from 'configuration';
import InteractiveText from 'components/InteractiveText';

import {
  homeBackgroundStyles,
  homeTextContainerStyles,
  homeTextDescriptionStyles,
} from './styles.scss';

const HomePage = () => {
  return (
    <div className={homeBackgroundStyles}>
      <div className={homeTextContainerStyles}>
        <div>
        <InteractiveText
          data={Config.get('interactiveText.data')}
          timeDelay={Config.get('interactiveText.timeDelay')}
        />
        <div className={homeTextDescriptionStyles}>
          {Config.get('profileCard.description')}
        </div>
        </div>
      </div>
    </div>
  );
};

HomePage.propTypes = {};

export default HomePage;
