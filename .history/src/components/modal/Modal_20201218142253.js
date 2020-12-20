import React from 'react';
import { ModalHeader, ModalSection, ModalFooter } from './modalComponents/';
import './Modal.css';

const Modal = ({ show, closeModalHandler}) => {
    return (
        <main className="modal-wrapper"
            style={{
                transform: show ? 'translate(0vh)' : 'translate(-100vh)',
                opacity: show ? '1' : '0',
            }}
        >
            <ModalHeader closeModalHandler={closeModalHandler} />
            <ModalSection />
            <ModalFooter closeModalHandler={closeModalHandler} />
        </main>
    )
}

export default Modal;
