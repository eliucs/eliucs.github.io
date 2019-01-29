/* eslint-disable react/no-danger */
import React from 'react';

import Config from 'configuration';
import InteractiveText from 'components/InteractiveText';

import {
  homeBackgroundStyles,
  homeTextContainerStyles,
  homeTextDescriptionStyles,
} from './styles.scss';

const HomePage = () => (
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

export default HomePage;
