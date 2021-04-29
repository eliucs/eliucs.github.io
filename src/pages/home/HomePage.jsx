/* eslint-disable react/no-danger */
import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import Config from 'configuration';
import InteractiveText from 'components/InteractiveText';
import {
  setThemeLight,
  setPageThemeLight,
  hamburgerClose,
} from 'actions/NavBarActions';
import {
  menuClose,
} from 'actions/MenuActions';
import HomeLinks from 'components/HomeLinks';

import {
  homeBackgroundStyles,
  homeTextContainerStyles,
  homeTextDescriptionStyles,
} from './styles.scss';

const HomePage = ({ dispatch }) => {
  dispatch(setThemeLight());
  dispatch(setPageThemeLight());
  dispatch(hamburgerClose());
  dispatch(menuClose());

  return (
    <div className={homeBackgroundStyles}>
      <div className={homeTextContainerStyles}>
        <div>
          <InteractiveText
            data={Config.get('interactiveText.data')}
            timeDelay={Config.get('interactiveText.timeDelay')}
          />
          <div
            className={homeTextDescriptionStyles}
            dangerouslySetInnerHTML={{ __html: Config.get('profileCard.description') }}
          />
          <HomeLinks
            profile={Config.get('profileCard')}
          />

          <Modal isOpen size="lg">
            <ModalHeader>Important</ModalHeader>
            <ModalBody>
              <p>It has come to my attention that a student named &quot;Eric Liu&quot; is being mentioned on the r/uwaterloo subreddit.</p>
              <p>That person is <b>NOT</b> me.</p>
              <p>They just happen to have the same common name. I&apos;ve already graduated in 2020.</p>
              <p>Please do not direct any harassment towards me, my friends or the other students named &quot;Eric Liu&quot; at Waterloo who are not involved.</p>
              <p>Thank you.</p>
              <center>
                <img style={{'textAlign': 'center'}} src="https://eliucs.s3.amazonaws.com/img/misc/obama.png"></img>
              </center>
            </ModalBody>
          </Modal>
        </div>
      </div>
    </div>
  );
};

HomePage.propTypes = {
  dispatch: PropTypes.func,
};

const mapStateToProps = () => ({});

export default compose(
  connect(mapStateToProps),
)(HomePage);
