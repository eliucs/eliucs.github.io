import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Col, Container, Row } from 'reactstrap';

import {
  setThemeDark,
  setPageThemeDark,
  hamburgerClose,
} from 'actions/NavBarActions';
import {
  menuClose,
} from 'actions/MenuActions';
import Markdown from 'components/Markdown';

import {
  aboutStyles,
  aboutHeaderStyles,
  aboutHeaderTitleStyles,
  aboutHeaderSubtitleStyles,
} from './styles.scss';

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
          <div className={aboutHeaderStyles}>
            <div className={aboutHeaderTitleStyles}>About Me.</div>
            <div className={aboutHeaderSubtitleStyles}>Who am I, what do I do?</div>
          </div>

          <Markdown />
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
