import { useState } from "react";

import "./alertmodal.css";

const Modal = ({ onClose, onBack, onCancelData }) => {

  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <button className="close-btn" onClick={onClose}>
          ✕
        </button>

        <div className="modal-icon">!</div>

        <h2 className="modal-title">Are you sure you want to cancel?</h2>

        <p className="modal-subtitle">
          Once canceled, your data will be lost.
        </p>

        <div className="modal-buttons">
          <button className="btn cancel" onClick={() => {onCancelData();    onClose();   }}>Cancel</button>
          <button className="btn back" onClick={onBack}>Go back to form</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
