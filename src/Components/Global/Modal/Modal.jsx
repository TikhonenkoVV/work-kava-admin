import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Backdrop } from './Modal.styled.js';

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ onClose, children, forwardetRef, id }) => {
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  const handleKeyDown = e => {
    if (e.code === 'Escape') {
      if (typeof onClose === 'function') {
        onClose('askModal');
      }
    }
  };

  const handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      if (typeof onClose === 'function') {
        onClose('askModal');
      }
    }
  };

  return createPortal(
    <Backdrop
      className="visually-hidden"
      // id={id}
      // ref={forwardetRef}
      onClick={handleBackdropClick}
    >
      {children}
    </Backdrop>,
    modalRoot
  );
};
