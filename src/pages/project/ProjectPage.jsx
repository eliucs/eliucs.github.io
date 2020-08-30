import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router-dom';
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
import Markdown from 'components/Markdown';
import ProjectLinks from 'components/ProjectLinks';

import {
  projectStyles,
  projectImageContainerStyles,
  projectImageStyles,
} from './styles.scss';

const ProjectPage = ({
  dispatch,
  match,
}) => {
  dispatch(setThemeDark());
  dispatch(setPageThemeDark());
  dispatch(hamburgerClose());
  dispatch(menuClose());

  const { projectId } = match.params;
  const project = Config.get('projects.items').find(x => x.projectId === projectId);

  if (!project) {
    return <Redirect to="/projects" />;
  }

  const buildContentUrl = id => `${Config.get('projects.baseContentUrl')}/${id}.md`;
  const buildImageUrl = id => `${Config.get('projects.baseImageUrl')}/${id}.png`;

  return (
    <Container
      fluid
      className={projectStyles}
    >
      <Row>
        <Col md="2" />
        <Col md="8">
          <PageHeader
            title={project.title}
            subtitle={project.description}
          />
          <ProjectLinks
            links={project.links}
          />
          <div className={projectImageContainerStyles}>
            <img
              className={projectImageStyles}
              src={`${buildImageUrl(projectId)}`}
              alt={project.title}
            />
          </div>
          <Markdown
            contentKey={projectId}
            url={buildContentUrl(projectId)}
          />
        </Col>
        <Col md="2" />
      </Row>
    </Container>
  );
};

ProjectPage.propTypes = {
  dispatch: PropTypes.func,
  match: PropTypes.object,
};

const mapStateToProps = () => ({});

export default compose(
  connect(mapStateToProps),
  withRouter,
)(ProjectPage);
