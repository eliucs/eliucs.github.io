/* eslint-disable */

import React from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';

const ImportantModal = () => (
  <Modal isOpen size="lg">
    <ModalHeader>
      <b>Important</b>
    </ModalHeader>
    <ModalBody>
      <p>
        It has come to my attention that a student named &quot;Eric Liu&quot; is being
        mentioned on the r/uwaterloo subreddit.
      </p>
      <p>
        That person is <b>NOT</b> me.
      </p>
      <p>
        They just happen to have the same common name. I&apos;ve already graduated in
        2020.
      </p>
      <p>
        Please do not direct any harassment towards me, my friends or the other students
        named &quot;Eric Liu&quot; at Waterloo who are not involved.
      </p>
      <p>Thank you.</p>
    </ModalBody>
  </Modal>
);

export default ImportantModal;
