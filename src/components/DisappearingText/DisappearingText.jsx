import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { disappearingTextStyles } from './styles.scss';

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

const LENGTH = 120;
const CHAR_SET = 'abcdefghijklmnopqrstuvwxyz';

export default class DisappearingText extends Component {
  constructor(props) {
    super(props);
    this.state = {
      strModified: '',
      indices: new Set(),
    };
  }

  componentDidMount() {
    const { data, timeDelay } = this.props;
    let str = randomString(LENGTH, CHAR_SET);
    const set = new Set();

    for (let i = 0; i < data.length; i++) {
      const start = i * (LENGTH / data.length);
      const end = (i + 1) * (LENGTH / data.length) - data[i].length - 1;
      const index = randomInt(start, end);
      str = replaceAt(str, index, data[i]);
      for (let j = index; j < index + data[i].length; j++) set.add(j);
    }

    const sum = data.reduce((prev, curr) => prev + curr.length, 0);

    this.interval = setInterval(() => {
      if (this.state.indices.size === (str.length - sum)) {
        clearInterval(this.interval);
      }

      // Repeatedly generate an index from 0 to LENGTH - 1 that has not been
      // seen yet and does not also appear in set
      let indexReplace = -1;
      while (true) {
        indexReplace = randomInt(0, LENGTH - 1);
        if (!this.state.indices.has(indexReplace) && !set.has(indexReplace)) break;
      }
      this.state.indices.add(indexReplace);
      let strModified = '';
      for (let i = 0; i < str.length; i++) {
        if (this.state.indices.has(i)) {
          strModified += `<span style="color:black;">${str[i]}</span>`;
        } else {
          strModified += str[i];
        }
      }

      this.setState({ strModified });
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
        dangerouslySetInnerHTML={{ __html: this.state.strModified }}
      />
    );
  }
}

DisappearingText.props = {
  data: PropTypes.array,
  timeDelay: PropTypes.number,
};
