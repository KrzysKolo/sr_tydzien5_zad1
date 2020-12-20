import React from 'react';
import { ModalHeader, ModalSection, ModalFooter } from './modalComponents/';
import ModalImg from './ModalImg';
import './Modal.css';

const Modal = ({ show, closeModalHandler}) => {
    return (
        <main className="modal-wrapper"
            style={{
                transform: show ? 'translateY(0vh)' : 'translateY(-100vh)',
                opacity: show ? '1' : '0',
            }}
        >
            <ModalImg alt='coffee' />
            <div className="modal">
                <ModalHeader closeModalHandler={closeModalHandler} />
                <ModalSection />
                <ModalFooter closeModalHandler={closeModalHandler} />
            </div>

        </main>
    )
}

export default Modal;
