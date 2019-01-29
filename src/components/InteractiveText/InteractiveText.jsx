import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { interactiveTextStyles } from './styles.scss';

export default class InteractiveText extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      text: '',
    };
  }

  componentDidMount() {
    const { data, timeDelay } = this.props;

    this.setState({ text: data[0] });

    this.interval = setInterval(() => {
      const index = (this.state.index + 1) % data.length;
      this.setState({
        index,
        text: data[index],
      });
    }, timeDelay);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div className={interactiveTextStyles}>
        {this.state.text}
      </div>
    );
  }
}

InteractiveText.props = {
  data: PropTypes.array,
  timeDelay: PropTypes.number,
};
