/* eslint-disable react/no-danger */
import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';

import {
  ireneCountdownBackgroundStyles,
  ireneCountdownContainerStyles,
  ireneCountdownDateStyles,
  ireneCountdownTextStyles,
} from './styles.scss';

const TEXT = 'until I see ❤️';
const TARGET_DATE = new Date(2020, 7, 17);
const DAY_MS = 1000 * 60 * 60 * 24;

function getDaysText() {
  const today = new Date();
  const daysLeft = Math.max(Math.ceil((TARGET_DATE.getTime() - today.getTime()) / DAY_MS), 0);
  return `${daysLeft} days`;
}

function IreneCountdownPage() {
  return (
    <div className={ireneCountdownBackgroundStyles}>
      <div className={ireneCountdownContainerStyles}>
        <div>
          <div className={ireneCountdownDateStyles}>
            {getDaysText()}
          </div>
          <div className={ireneCountdownTextStyles}>
            {TEXT}
          </div>
        </div>
      </div>
    </div>
  );
}

IreneCountdownPage.propTypes = {};

const mapStateToProps = () => ({});

export default compose(
  connect(mapStateToProps),
)(IreneCountdownPage);
