import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  homeLinkContainerStyles,
} from './styles.scss';

const HomeLinks = ({ profile }) => (
  <div className={homeLinkContainerStyles}>
    <span>
      <a href={profile.emailUrl}>
        <FontAwesomeIcon
          icon="envelope"
          style={{
            width: '1.5rem',
            height: '1.5rem',
          }}
        />
      </a>
    </span>
    <span>
      <a href={profile.githubUrl}>
        <FontAwesomeIcon
          icon={['fab', 'github']}
          style={{
            width: '1.5rem',
            height: '1.5rem',
          }}
        />
      </a>
    </span>
    <span>
      <a href={profile.linkedinUrl}>
        <FontAwesomeIcon
          icon={['fab', 'linkedin']}
          style={{
            width: '1.5rem',
            height: '1.5rem',
          }}
        />
      </a>
    </span>
    <span>
      <a href={profile.instagramUrl}>
        <FontAwesomeIcon
          icon={['fab', 'instagram']}
          style={{
            width: '1.5rem',
            height: '1.5rem',
          }}
        />
      </a>
    </span>
    <span>
      <a href={profile.twitterUrl}>
        <FontAwesomeIcon
          icon={['fab', 'twitter']}
          style={{
            width: '1.5rem',
            height: '1.5rem',
          }}
        />
      </a>
    </span>
  </div>
);

HomeLinks.propTypes = {
  profile: PropTypes.object,
};

export default HomeLinks;
