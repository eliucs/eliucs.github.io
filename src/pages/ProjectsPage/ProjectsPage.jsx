import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Col, Container, Row } from 'reactstrap';

import Config from 'configuration';
import {
  setThemeDark,
  setPageThemeDark,
  hamburgerClose,
} from 'actions/NavBarActions';
import {
  menuClose,
} from 'actions/MenuActions';
import PageHeader from 'components/PageHeader';
import ProjectGallery from 'components/ProjectGallery';

import { projectsStyles } from './styles.scss';

const ProjectsPage = ({ dispatch }) => {
  dispatch(setThemeDark());
  dispatch(setPageThemeDark());
  dispatch(hamburgerClose());
  dispatch(menuClose());

  return (
    <Container
      fluid
      className={projectsStyles}
    >
      <Row>
        <Col md="1" />
        <Col md="10">
          <PageHeader
            title={Config.get('projects.header.title')}
            subtitle={Config.get('projects.header.subtitle')}
          />
          <ProjectGallery
            projects={Config.get('projects.items')}
          />
        </Col>
        <Col md="1" />
      </Row>
    </Container>
  );
};

ProjectsPage.propTypes = {
  dispatch: PropTypes.func,
};

const mapStateToProps = () => ({});

export default compose(
  connect(mapStateToProps),
)(ProjectsPage);
