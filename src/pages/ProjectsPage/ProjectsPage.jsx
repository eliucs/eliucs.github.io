import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';

import { setThemeDark } from 'actions/NavBarThemeActions';
import { projectsStyles } from './styles.scss';

const ProjectsPage = ({ dispatch }) => {
  dispatch(setThemeDark());

  return (
    <div className={projectsStyles}>
      <h1>Projects Page</h1>
    </div>
  );
};

ProjectsPage.propTypes = {
  dispatch: PropTypes.func,
};

const mapStateToProps = () => ({});

export default compose(
  connect(mapStateToProps),
)(ProjectsPage);
