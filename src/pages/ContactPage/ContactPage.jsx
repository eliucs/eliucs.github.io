import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';

import { setThemeDark } from 'actions/NavBarActions';
import { contactStyles } from './styles.scss';

const ContactPage = ({ dispatch }) => {
  dispatch(setThemeDark());

  return (
    <div className={contactStyles}>
      <h1>Contact Page</h1>
    </div>
  );
};

ContactPage.propTypes = {
  dispatch: PropTypes.func,
};

const mapStateToProps = () => ({});

export default compose(
  connect(mapStateToProps),
)(ContactPage);
