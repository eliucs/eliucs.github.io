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
  irene3BackgroundStyles,
  irene3ContainerStyles,
} from './styles.scss';

class Irene3Page extends Component {
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
      <div className={irene3BackgroundStyles}>
        <div className={irene3ContainerStyles}>
          {/* eslint-disable-next-line */}
          <video ref={this.video} height="100%" width="100%" onClick={() => this.video.current.play()}>
            <source src={Config.get('irene3.videoSrc')} type="video/mp4" />
            <track />
          </video>
        </div>
      </div>
    );
  }
}

Irene3Page.propTypes = {
  dispatch: PropTypes.func,
};

const mapStateToProps = () => ({});

export default compose(
  connect(mapStateToProps),
)(Irene3Page);
