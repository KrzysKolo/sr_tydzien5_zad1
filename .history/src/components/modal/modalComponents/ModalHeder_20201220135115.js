import React from 'react';

const ModalHeder = ({ closeModalHandler, title }) => {
    return (
        <header className="modal-header">
            <p>{title}</p>
            <span className="close-modal-btn" onClick={closeModalHandler}>X</span>
        </header>
    )
}

export default ModalHeder;
