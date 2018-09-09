import React from 'react';
import PropTypes from 'prop-types';

import './modal.scss';

const CN = 'modal';

const Modal = ({ isOpen, children, onClose }) => {
  if (isOpen) {
    return (
      <div className={CN}>
        <div className={`${CN}__container`} onClick={onClose} />
        <div className={`${CN}__content`}>{children}</div>
      </div>
    );
  }
  return null;
};

Modal.propTypes = {
  isOpen: PropTypes.bool,
  children: PropTypes.any,
  onClose: PropTypes.func
};

Modal.defaultProps = {
  isOpen: false,
  children: <div />,
  onClose: () => {}
};

export default Modal;
