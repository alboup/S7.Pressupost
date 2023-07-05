import React from 'react';
import './Modal.css';

interface ModalProps {
  children: React.ReactNode;
  show: boolean;
  onClose: () => void;
}

const Modal = ({ children, show, onClose }: ModalProps) => {
  if (!show) return null;

  return (
    <div className="modalOverlay" onClick={onClose}>
      <div className="modalContent" onClick={e => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
}

export default Modal;
