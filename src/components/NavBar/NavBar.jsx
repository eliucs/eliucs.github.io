import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { HamburgerSlider } from 'react-animated-burgers';

import { NavBarModeEnum } from 'enums';
import {
  menuOpen,
  menuClose,
} from 'actions/MenuActions';
import {
  hamburgerOpen,
  hamburgerClose,
  setThemeLight,
  setThemeDark,
} from 'actions/NavBarActions';

import { navBarContainerStyles } from './styles.scss';

class NavBar extends Component {
  toggleButton = () => {
    if (!this.props.navBarActive) {
      this.props.dispatch(menuOpen());
      this.props.dispatch(hamburgerOpen());
      this.props.dispatch(setThemeLight());
    } else {
      this.props.dispatch(menuClose());
      this.props.dispatch(hamburgerClose());

      switch (this.props.navBarPageTheme) {
        case NavBarModeEnum.Light:
          this.props.dispatch(setThemeLight());
          break;
        case NavBarModeEnum.Dark:
          this.props.dispatch(setThemeDark());
          break;
        default:
          this.props.dispatch(setThemeLight());
          break;
      }
    }
  };

  getBarColor = () => {
    switch (this.props.navBarTheme) {
      case NavBarModeEnum.Light:
        return '#fff';
      case NavBarModeEnum.Dark:
        return '#000';
      default:
        return '#fff';
    }
  }

  render() {
    return (
      <div className={navBarContainerStyles}>
        <HamburgerSlider
          isActive={this.props.navBarActive}
          toggleButton={this.toggleButton}
          barColor={this.getBarColor()}
          buttonStyle={{ outline: 'none' }}
        />
      </div>
    );
  }
}

NavBar.propTypes = {
  navBarTheme: PropTypes.string,
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
