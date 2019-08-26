import React from 'react';
import PropTypes from 'prop-types';
import { Col, Container, Row } from 'reactstrap';
import { Link } from 'react-router-dom';

import {
  projectGalleryItemStyles,
  projectGalleryItemImgStyles,
  projectGalleryItemTextContainerStyles,
  projectGalleryItemTitleStyles,
} from './styles.scss';

const ProjectGallery = ({
  projects,
  baseThumbnailUrl,
}) => {
  const buildThumbnailUrl = projectId => `${baseThumbnailUrl}/${projectId}.png`;

  return (
    <Container fluid>
      <Row>
        {
          projects
          && projects.length > 0
          && projects.map(({
            title,
            description,
            projectId,
          }, i) => (
            <Col
              key={i}
              xs="12"
              sm="6"
              md="6"
              className={projectGalleryItemStyles}
            >
              <Link
                to={`/projects/${projectId}`}
              >
                <img
                  className={projectGalleryItemImgStyles}
                  src={buildThumbnailUrl(projectId)}
                  alt={title}
                />
              </Link>
              <div className={projectGalleryItemTextContainerStyles}>
                <div className={projectGalleryItemTitleStyles}>
                  <Link to={`/projects/${projectId}`}>{title}</Link>
                </div>
                <div>{description}</div>
              </div>
            </Col>
          ))
        }
      </Row>
    </Container>
  );
};

ProjectGallery.propTypes = {
  projects: PropTypes.array,
  baseThumbnailUrl: PropTypes.string,
};

export default ProjectGallery;
