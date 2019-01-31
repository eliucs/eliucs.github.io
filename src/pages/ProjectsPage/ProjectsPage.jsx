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
        <Col md="2" />
        <Col md="8">
          <PageHeader
            title={Config.get('projects.header.title')}
            subtitle={Config.get('projects.header.subtitle')}
          />
        </Col>
        <Col md="2" />
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
