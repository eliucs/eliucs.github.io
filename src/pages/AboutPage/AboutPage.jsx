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
import Markdown from 'components/Markdown';
import PageHeader from 'components/PageHeader';

import { aboutStyles } from './styles.scss';

const AboutPage = ({ dispatch }) => {
  dispatch(setThemeDark());
  dispatch(setPageThemeDark());
  dispatch(hamburgerClose());
  dispatch(menuClose());

  return (
    <Container
      fluid
      className={aboutStyles}
    >
      <Row>
        <Col md="2" />
        <Col md="8">
          <PageHeader
            title={Config.get('about.header.title')}
            subtitle={Config.get('about.header.subtitle')}
          />
          <Markdown
            contentKey={Config.get('about.markdown.key')}
            url={Config.get('about.markdown.url')}
          />
        </Col>
        <Col md="2" />
      </Row>
    </Container>
  );
};

AboutPage.propTypes = {
  dispatch: PropTypes.func,
};

const mapStateToProps = () => ({});

export default compose(
  connect(mapStateToProps),
)(AboutPage);
