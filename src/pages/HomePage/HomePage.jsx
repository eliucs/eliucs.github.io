import React from 'react';
import PropTypes from 'prop-types';
import { Col, Container, Row } from 'reactstrap';

import Config from 'configuration';
import ProfileCard from 'components/ProfileCard';
import { homeStyles } from './styles.scss';


const HomePage = props => {
  return (
    <Container fluid>
      <Row>
        <Col md="4">
          <ProfileCard profile={Config.get('profileCard')} />
        </Col>
        <Col md="8">
          Test
        </Col>
      </Row>
    </Container>
  );
};

HomePage.propTypes = {};

export default HomePage;
