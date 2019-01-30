import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Config from 'configuration';

import {
  menuStyles,
  menuItemContainerStyles,
  menuItemAreaStyles,
  menuItemStyles,
} from './styles.scss';

const Menu = () => (
  <div
    className={menuStyles}
    style={{ height: '100vh' }}
  >
    <div className={menuItemContainerStyles}>
      <div className={menuItemAreaStyles}>
        {
          Config.get('menu.menuItems').map((menuItem, i) => (
            <div
              key={i}
              className={menuItemStyles}
            >
              <Link to={menuItem.route}>{menuItem.title}</Link>
            </div>
          ))
        }
      </div>
    </div>
  </div>
);

export default Menu;
