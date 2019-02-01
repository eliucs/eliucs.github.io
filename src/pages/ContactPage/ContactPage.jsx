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
import ContactLinks from 'components/ContactLinks';

import { contactStyles } from './styles.scss';

const ContactPage = ({ dispatch }) => {
  dispatch(setThemeDark());
  dispatch(setPageThemeDark());
  dispatch(hamburgerClose());
  dispatch(menuClose());

  const contactItems = Config.get('contact.items');

  return (
    <Container
      fluid
      className={contactStyles}
    >
      <Row>
        <Col md="2" />
        <Col md="8">
          <PageHeader
            title={Config.get('contact.header.title')}
            subtitle={Config.get('contact.header.subtitle')}
          />
        </Col>
        <Col md="2" />
      </Row>
      <Row>
        <Col md="2" />
        <Col md="8">
          <ContactLinks
            items={contactItems}
          />
        </Col>
        <Col md="2" />
      </Row>
    </Container>
  );
};

ContactPage.propTypes = {
  dispatch: PropTypes.func,
};

const mapStateToProps = () => ({});

export default compose(
  connect(mapStateToProps),
)(ContactPage);
