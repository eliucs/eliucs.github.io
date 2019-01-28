import React from 'react';
import PropTypes from 'prop-types';
import { Col, Container, Row } from 'reactstrap';

import Config from 'configuration';
import ProfileCard from 'components/ProfileCard';
import {
  homeLeftStyles,
  homeRightStyles,
  tiltStyles,
  someStyles,
} from './styles.scss';

import Tilt from 'react-tilt';


const HomePage = () => {
  return (
    <Container fluid>
      <Row>
        <Col md="4" className={homeLeftStyles}>
          <ProfileCard profile={Config.get('profileCard')} />
        </Col>
        <Col md="8" className={homeRightStyles}>
          <Tilt
            className={tiltStyles}
            options={{
              max: 25,
              reverse: true,
            }}
            style={{ height: 250, width: 250 }}
          >
            <div className="Tilt-inner">
              <img className={someStyles} alt="tilt" src={Config.get('profileCard.imageUrl')} />
            </div>
          </Tilt>
        </Col>
      </Row>
    </Container>
  );
};

HomePage.propTypes = {};

export default HomePage;
