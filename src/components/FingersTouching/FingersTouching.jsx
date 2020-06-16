import React, { Component } from 'react';
// import PropTypes from 'prop-types';

import {
  fingersTouchingContainerStyles,
  fingersTouchingCenterStyles,
  fingersTouchingCuteFaceStyles,
  fingersTouchingLeftStyles,
  fingersTouchingRightStyles,
  fingersTouchingTextStyles,
} from './styles.scss';

// function shuffleArray(arr) {
//   for (let i = arr.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     const temp = arr[i];
//     arr[i] = arr[j];
//     arr[j] = temp;
//   }
// }

const LEFT_FINGER = '\u{1F449}';
const RIGHT_FINGER = '\u{1F448}';
const CUTE_FACE = '\u{1F97A}';

export default class FingersTouching extends Component {
  constructor(props) {
    super(props);
    this.state = { isTouching: false };
    this.leftFinger = React.createRef();
    this.rightFinger = React.createRef();
    this.cuteFace = React.createRef();
    this.checkFingersTouching = this.checkFingersTouching.bind(this);
    // this.burstEmojis = this.burstEmojis.bind(this);
  }

  componentDidMount() {
    window.addEventListener('resize', this.checkFingersTouching);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.checkFingersTouching);
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  checkFingersTouching() {
    const leftFinger = this.leftFinger.current.getBoundingClientRect();
    const rightFinger = this.rightFinger.current.getBoundingClientRect();
    const isTouching = leftFinger.left <= rightFinger.right
      && rightFinger.left <= leftFinger.right;

    if (!isTouching) return;

    this.setState({ isTouching: true });
    window.removeEventListener('resize', this.checkFingersTouching);
    // this.interval = setInterval(this.burstEmojis, 2000);
  }

  // burstEmojis() {}

  render() {
    if (!this.state.isTouching) {
      return (
        <div className={fingersTouchingContainerStyles}>
          <div
            className={fingersTouchingLeftStyles}
            ref={this.leftFinger}
          >
            {LEFT_FINGER}
          </div>
          <div
            className={fingersTouchingRightStyles}
            ref={this.rightFinger}
          >
            {RIGHT_FINGER}
          </div>
        </div>
      );
    }

    return (
      <div className={fingersTouchingContainerStyles}>
        <div className={fingersTouchingCenterStyles}>
          <div
            className={fingersTouchingCuteFaceStyles}
            ref={this.cuteFace}
          >
            {CUTE_FACE}
          </div>
          <div className={fingersTouchingTextStyles}>i love u</div>
        </div>
      </div>
    );
  }
}

FingersTouching.props = {};
