import React from 'react';
import PropTypes from 'prop-types';

import {
  projectLinksStyles,
  projectLinksItemStyles,
} from './styles.scss';

const ProjectLinks = ({ links }) => (
  <div className={projectLinksStyles}>
    {
      links
      && links.map((link, i) => (
        <div
          key={i}
          className={projectLinksItemStyles}
        >
          <a href={link.url}>{link.name}</a>
        </div>
      ))
    }
  </div>
);

ProjectLinks.propTypes = {
  links: PropTypes.array,
};

export default ProjectLinks;
