import React from 'react';
import PropTypes from 'prop-types';
import { Col, Container, Row } from 'reactstrap';

import { projectGalleryStyles } from './styles.scss';

const ProjectGallery = () => (
  <Container fluid>
    <Row>
      <Col xs="12" sm="6" md="4">1</Col>
      <Col xs="12" sm="6" md="4">1</Col>
      <Col xs="12" sm="6" md="4">1</Col>
      <Col xs="12" sm="6" md="4">1</Col>
      <Col xs="12" sm="6" md="4">1</Col>
      <Col xs="12" sm="6" md="4">1</Col>
    </Row>
  </Container>
);

ProjectGallery.propTypes = {};

export default ProjectGallery;
