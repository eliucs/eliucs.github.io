/* eslint-disable react/no-danger */
import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';

import WordCount from 'components/WordCount';
import {
  setThemeDark,
  setPageThemeDark,
  hamburgerClose,
} from 'actions/NavBarActions';
import {
  menuClose,
} from 'actions/MenuActions';

import {
  wordCountBackgroundStyles,
  wordCountStyles,
} from './styles.scss';

const WordCountPage = ({ dispatch }) => {
  dispatch(setThemeDark());
  dispatch(setPageThemeDark());
  dispatch(hamburgerClose());
  dispatch(menuClose());

  return (
    <div className={wordCountBackgroundStyles}>
      <div className={wordCountStyles}>
        <WordCount />
      </div>
    </div>
  );
};

WordCountPage.propTypes = {
  dispatch: PropTypes.func,
};

const mapStateToProps = () => ({});

export default compose(
  connect(mapStateToProps),
)(WordCountPage);
