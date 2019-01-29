import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { HamburgerSlider } from 'react-animated-burgers';

import { NavBarModeEnum } from 'enums';

import { navBarContainerStyles } from './styles.scss';

export default class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false,
    };
  }

  toggleButton = () => {
    this.setState({ isActive: !this.state.isActive });
  };

  getBarColor = () => {
    switch (this.props.mode) {
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
          isActive={this.state.isActive}
          toggleButton={this.toggleButton}
          barColor={this.getBarColor()}
          buttonStyle={{ outline: 'none' }}
        />
      </div>
    );
  }
}

NavBar.propTypes = {
  mode: PropTypes.string,
};
