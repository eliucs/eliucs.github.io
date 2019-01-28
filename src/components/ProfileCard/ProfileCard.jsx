import React from 'react';
import PropTypes from 'prop-types';
import { Col, Container, Row } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  profileCardStyles,
  profileCardTitleStyles,
  profileCardImageContainerStyles,
  profileCardImageStyles,
  profileCardDescriptionStyles,
} from './styles.scss';

const ProfileCard = ({
  profile: {
    title,
    description,
    imageUrl,
  },
}) => (
  <Container fluid className={profileCardStyles}>
    <Row className={profileCardImageContainerStyles}>
      <Col md="12">
        <img
          src={imageUrl}
          alt="profile"
          className={profileCardImageStyles}
        />
      </Col>
    </Row>
    <Row className={profileCardTitleStyles}>
      <Col md="12">
        {title}
      </Col>
    </Row>
    <Row className={profileCardDescriptionStyles}>
      <Col md="12">{description}</Col>
    </Row>
  </Container>
);

ProfileCard.propTypes = {
  profile: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    imageUrl: PropTypes.string,
  }),
};

export default ProfileCard;
