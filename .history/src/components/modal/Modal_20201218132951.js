import React from 'react';
import {ModalHeader, ModalSection, ModalFooter} from './modalComponents/';
import './Modal.css';

const Modal = () => {
    return (
        <main className="modal-wrapper">
            <ModalHeader />
            <ModalSection />
            <ModalFooter />
        </main>
    )
}

export default Modal;
