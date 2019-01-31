import React from 'react';
import PropTypes from 'prop-types';

import {
  pageHeaderStyles,
  pageHeaderTitleStyles,
  pageHeaderSubtitleStyles,
} from './styles.scss';

const PageHeader = ({ title, subtitle }) => (
  <div className={pageHeaderStyles}>
    {title && (
      <div className={pageHeaderTitleStyles}>
        {title}
      </div>
    )}
    {subtitle && (
      <div className={pageHeaderSubtitleStyles}>
        {subtitle}
      </div>
    )}
  </div>
);

PageHeader.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
};

export default PageHeader;
