/* eslint-disable react/no-danger */
import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import PhoneInput from 'react-phone-input-2';
import { connect } from 'react-redux';
import 'react-phone-input-2/lib/bootstrap.css';
import { Button } from 'reactstrap';

import {
  setThemeDark,
  setPageThemeDark,
  hamburgerClose,
} from 'actions/NavBarActions';
import {
  menuClose,
} from 'actions/MenuActions';

import {
  irene4BackgroundStyles,
  irene4ContainerStyles,
} from './styles.scss';

const PHONE_NUMBER_MAX_LENGTH = 11;

class Irene4Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      phone: '',
      disableSendButton: true,
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.onButtonClick = this.onButtonClick.bind(this);
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(setThemeDark());
    dispatch(setPageThemeDark());
    dispatch(hamburgerClose());
    dispatch(menuClose());
  }

  onInputChange(phone) {
    const disableSendButton = phone.length < PHONE_NUMBER_MAX_LENGTH;
    this.setState({ phone, disableSendButton });
  }

  onButtonClick() {
    const data = { phoneNumberTo: this.state.phone };
    fetch('localhost:3000/call', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json' },
    })
      .then(res => {
        console.log(res);
      });
  }

  render() {
    console.log(this.state.phone);

    return (
      <div className={irene4BackgroundStyles}>
        <div className={irene4ContainerStyles}>
          <div>
            <PhoneInput
              inputProps={{
                autoFocus: true,
              }}
              country="us"
              value={this.state.phone}
              onChange={this.onInputChange}
              disableDropdown
              containerStyle={{
                width: 0,
                marginBottom: '20px',
              }}
            />
            <Button
              color="primary"
              disabled={this.state.disableSendButton}
              onClick={this.onButtonClick}
            >
              Get Voicemail
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

Irene4Page.propTypes = {
  dispatch: PropTypes.func,
};

const mapStateToProps = () => ({});

export default compose(
  connect(mapStateToProps),
)(Irene4Page);
