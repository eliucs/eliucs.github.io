/* eslint-disable react/no-danger */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';

import Config from 'configuration';
import {
  setThemeLight,
  setPageThemeLight,
  hamburgerClose,
} from 'actions/NavBarActions';
import {
  menuClose,
} from 'actions/MenuActions';

import {
  irene21BackgroundStyles,
  irene21ContainerStyles,
} from './styles.scss';

class Irene21Page extends Component {
  constructor(props) {
    super(props);
    this.video = React.createRef();
  }

  render() {
    const { dispatch } = this.props;
    dispatch(setThemeLight());
    dispatch(setPageThemeLight());
    dispatch(hamburgerClose());
    dispatch(menuClose());

    return (
      <div className={irene21BackgroundStyles}>
        <div className={irene21ContainerStyles}>
          {/* eslint-disable-next-line */}
          <video ref={this.video} height="100%" width="100%" onClick={() => this.video.current.play()}>
            <source src={Config.get('irene2-1.videoSrc')} type="video/mp4" />
            <track />
          </video>
        </div>
      </div>
    );
  }
}

Irene21Page.propTypes = {
  dispatch: PropTypes.func,
};

const mapStateToProps = () => ({});

export default compose(
  connect(mapStateToProps),
)(Irene21Page);
