/* eslint-disable react/no-danger */
import React from 'react';
import PropTypes from 'prop-types';
import css from 'classnames';
import { compose } from 'redux';
import { connect } from 'react-redux';

import {
  setThemeLight,
  setPageThemeLight,
  hamburgerClose,
} from 'actions/NavBarActions';
import {
  menuClose,
} from 'actions/MenuActions';
import Config from 'configuration';
import setImmediateInterval from 'utils/setImmediateInterval';

import {
  irene5BackgroundStyles,
  irene5ContainerStyles,
  irene5HeartStyles,
  irene5PulseShortStyles,
  irene5PulseLongStyles,
} from './styles.scss';

const SHORT = Config.get('irene5.morseCode.short');
const LONG = Config.get('irene5.morseCode.long');
const MORSE_CODE = Config.get('irene5.morseCode.sequence');

class Irene5Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0,
      pulseStyles: '',
      key: 0,
    };
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(setThemeLight());
    dispatch(setPageThemeLight());
    dispatch(hamburgerClose());
    dispatch(menuClose());
    this.interval = setImmediateInterval(() => {
      const nextIndex = (this.state.currentIndex + 1) % MORSE_CODE.length;
      const nextKey = this.state.key + 1;
      const currentCode = MORSE_CODE[this.state.currentIndex];
      console.log(currentCode);
      if (currentCode === SHORT) {
        this.setState({
          currentIndex: nextIndex,
          pulseStyles: irene5PulseShortStyles,
          key: nextKey,
        });
      } else if (currentCode === LONG) {
        this.setState({
          currentIndex: nextIndex,
          pulseStyles: irene5PulseLongStyles,
          key: nextKey,
        });
      }
    }, Config.get('irene5.morseCode.delay'));
  }

  componentWillUnmount() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  render() {
    return (
      <div className={irene5BackgroundStyles}>
        <div className={irene5ContainerStyles}>
          <svg key={this.state.key} className={css(irene5HeartStyles, this.state.pulseStyles)} viewBox="0 0 32 29.6">
            <path
              d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2
              c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z"
            />
          </svg>
        </div>
      </div>
    );
  }
}

Irene5Page.propTypes = {
  dispatch: PropTypes.func,
};

const mapStateToProps = () => ({});

export default compose(
  connect(mapStateToProps),
)(Irene5Page);
