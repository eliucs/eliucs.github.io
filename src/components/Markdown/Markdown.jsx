/* eslint-disable react/no-danger */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import marked from 'marked';

import { cacheContent } from 'actions/MarkdownActions';

import { markdownStyles } from './styles.scss';

class Markdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: '',
    };
  }

  componentDidMount() {
    const {
      cachedContent,
      contentKey,
      dispatch,
      url,
    } = this.props;

    if (cachedContent[contentKey]) {
      this.setState({ content: cachedContent[contentKey] });
    } else {
      fetch(url)
        .then(result => result.text())
        .then(result => {
          const markedContent = marked(result);
          this.setState({ content: markedContent });
          dispatch(cacheContent(contentKey, markedContent));
        })
        .catch(() => {});
    }
  }

  render() {
    return (
      <div
        className={markdownStyles}
        dangerouslySetInnerHTML={{
          __html: this.state.content,
        }}
      />
    );
  }
}

Markdown.propTypes = {
  contentKey: PropTypes.string,
  url: PropTypes.string,
};

const mapStateToProps = ({ cachedContent }) => ({ cachedContent });

export default compose(
  connect(mapStateToProps),
)(Markdown);
