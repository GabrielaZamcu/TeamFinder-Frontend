import React, { useState } from "react";
import ModalCSS from "./Modal.module.css";

function Modal() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedOption(null);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <div>
      <button onClick={openModal}>Deschide Modal</button>
      {isOpen && (
        <div className={ModalCSS.modal}>
          <div className={ModalCSS.modalContent}>
            <span className={ModalCSS.close} onClick={closeModal}>
              &times;
            </span>
            <p>Alegeți o opțiune:</p>
            <button onClick={() => handleOptionClick("CV")}>CV</button>
            <button onClick={() => handleOptionClick("Project")}>
              Project
            </button>
            {selectedOption && (
              <div className={ModalCSS.selectedOption}>
                Ai selectat: {selectedOption}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Modal;
