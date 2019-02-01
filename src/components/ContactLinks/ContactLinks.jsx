import React from 'react';
import PropTypes from 'prop-types';
import { Col, Container, Row } from 'reactstrap';

import {
  contactLinksItemStyles,
  contactLinksItemTitleStyles,
  contactLinksItemDescriptionStyles,
  contactLinksItemLinkStyles,
} from './styles.scss';

const ContactLinks = ({ items }) => (
  <Container
    fluid
  >
    <Row>
      {
        items
        && items.map((item, i) => (
          <Col
            key={i}
            xs="12"
            sm="6"
            md="6"
            className={contactLinksItemStyles}
          >
            <div className={contactLinksItemTitleStyles}>
              <a href={item.url}>{item.title}</a>
            </div>
            <div className={contactLinksItemDescriptionStyles}>
              {item.description}
            </div>
            <div className={contactLinksItemLinkStyles}>
              <a href={item.url}>{item.link}</a>
            </div>
          </Col>
        ))
      }
    </Row>
  </Container>
);

ContactLinks.propTypes = {
  items: PropTypes.array,
};

export default ContactLinks;
