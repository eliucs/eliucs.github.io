import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  disappearingTextStyles,
  disappearingTextBlankStyles,
} from './styles.scss';

function randomString(length, chars) {
  let result = '';
  for (let i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
  return result;
}

function replaceAt(str, index, replacement) {
  return str.substr(0, index) + replacement + str.substr(index + replacement.length);
}

function randomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function shuffle(arr) {
  const n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    const r = randomInt(i, n - 1);
    const temp = arr[r];
    arr[r] = arr[i];
    arr[i] = temp;
  }
}

export default class DisappearingText extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      strModifiedNode: null,
      indices: new Set(),
    };
  }

  componentDidMount() {
    const {
      charset,
      data,
      length,
      timeDelay,
    } = this.props;
    let str = randomString(length, charset);
    const set = new Set();

    for (let i = 0; i < data.length; i++) {
      const start = i * (length / data.length);
      const end = (i + 1) * (length / data.length) - data[i].length - 1;
      const index = randomInt(start, end);
      str = replaceAt(str, index, data[i]);
      for (let j = index; j < index + data[i].length; j++) set.add(j);
    }

    const indexOrderList = [...Array(length).keys()];
    shuffle(indexOrderList);

    this.interval = setInterval(() => {
      if (this.state.index >= length) {
        clearInterval(this.interval);
        return;
      }

      let nextIndex = this.state.index;
      while (true) {
        if (nextIndex >= length) return;
        if (!set.has(indexOrderList[nextIndex])) break;
        nextIndex++;
      }
      this.state.indices.add(indexOrderList[nextIndex]);
      const strModifiedNode = (
        <>
          {[...Array(length).keys()].map(i => (this.state.indices.has(i)
            ? <span key={i} className={disappearingTextBlankStyles}>{str[i]}</span>
            : <span key={i}>{str[i]}</span>
          ))
          }
        </>
      );

      this.setState({
        strModifiedNode,
        index: ++nextIndex,
      });
    }, timeDelay);
  }

  componentWillUnmount() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  render() {
    return (
      <div
        className={disappearingTextStyles}
      >
        {this.state.strModifiedNode}
      </div>
    );
  }
}

DisappearingText.props = {
  charset: PropTypes.string,
  data: PropTypes.array,
  length: PropTypes.number,
  timeDelay: PropTypes.number,
};
