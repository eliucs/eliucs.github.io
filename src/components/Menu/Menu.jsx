import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Config from 'configuration';
import { menuClose } from 'actions/MenuActions';

import {
  menuStyles,
  menuItemContainerStyles,
  menuItemAreaStyles,
  menuItemStyles,
} from './styles.scss';

const Menu = ({ dispatch, isMenuOpen }) => {
  const menuHeight = isMenuOpen ? '100vh' : '0vh';
  const menuDisplay = isMenuOpen ? 'block' : 'none';

  return (
    <div
      className={menuStyles}
      style={{
        height: menuHeight,
        display: menuDisplay,
      }}
    >
      <div className={menuItemContainerStyles}>
        <div className={menuItemAreaStyles}>
          {
            Config.get('menu.menuItems').map((menuItem, i) => (
              <div
                key={i}
                className={menuItemStyles}
                onClick={() => dispatch(menuClose())}
              >
                <Link to={menuItem.route}>{menuItem.title}</Link>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
};

Menu.propTypes = {
  isMenuOpen: PropTypes.bool,
};

const mapStateToProps = state => ({
  isMenuOpen: state.isMenuOpen,
});

export default compose(
  connect(mapStateToProps),
)(Menu);
