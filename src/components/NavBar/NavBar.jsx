import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { HamburgerSlider } from 'react-animated-burgers';

import { NavBarModeEnum } from 'enums';
import {
  menuClose,
  menuOpen,
} from 'actions/MenuActions';
import {
  hamburgerClose,
  hamburgerOpen,
  setThemeDark,
  setThemeLight,
} from 'actions/NavBarActions';

import { navBarContainerStyles } from './styles.scss';

const NavBar = ({
  dispatch,
  navBarTheme,
  navBarActive,
  navBarPageTheme,
}) => {
  const toggleButton = () => {
    if (!navBarActive) {
      dispatch(menuOpen());
      dispatch(hamburgerOpen());
      dispatch(setThemeLight());
    } else {
      dispatch(menuClose());
      dispatch(hamburgerClose());

      switch (navBarPageTheme) {
        case NavBarModeEnum.Light:
          dispatch(setThemeLight());
          break;
        case NavBarModeEnum.Dark:
          dispatch(setThemeDark());
          break;
        default:
          break;
      }
    }
  };

  const getBarColor = () => {
    switch (navBarTheme) {
      case NavBarModeEnum.Light:
        return '#fff';
      case NavBarModeEnum.Dark:
        return '#000';
      default:
        return '#fff';
    }
  };

  return (
    <div className={navBarContainerStyles}>
      <HamburgerSlider
        isActive={navBarActive}
        toggleButton={toggleButton}
        barColor={getBarColor()}
        buttonStyle={{ outline: 'none' }}
      />
    </div>
  );
};

NavBar.propTypes = {
  dispatch: PropTypes.func,
  navBarTheme: PropTypes.string,
  navBarActive: PropTypes.bool,
  navBarPageTheme: PropTypes.string,
};

const mapStateToProps = ({
  navBarTheme,
  navBarActive,
  navBarPageTheme,
}) => ({
  navBarTheme,
  navBarActive,
  navBarPageTheme,
});

export default compose(
  connect(mapStateToProps),
)(NavBar);
