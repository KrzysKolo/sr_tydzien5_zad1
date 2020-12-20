import React from 'react';

const ModalHeder = ({ closeModalHandler }) => {
    return (
        <header className="modal-header">
            <p>Welcome T Our Site</p>
            <span className="close-modal-btn" onClick={closeModalHandler}>X</span>
        </header>
    )
}

export default ModalHeder;
