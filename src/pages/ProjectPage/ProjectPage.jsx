import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';

import { setThemeDark } from 'actions/NavBarActions';
import { projectStyles } from './styles.scss';

const ProjectPage = ({ dispatch }) => {
  dispatch(setThemeDark());

  return (
    <div className={projectStyles}>
      <h1>Project Page</h1>
    </div>
  );
};

ProjectPage.propTypes = {
  dispatch: PropTypes.func,
};

const mapStateToProps = () => ({});

export default compose(
  connect(mapStateToProps),
)(ProjectPage);
