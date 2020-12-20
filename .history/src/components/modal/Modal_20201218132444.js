import React from 'react';
import {ModalHeader, ModalSection, ModalFooter} from './modalComponents/';

const Modal = () => {
    return (
        <div className="modal-wrapper">
            <ModalHeader />
            <ModalSection />
            <ModalFooter />
        </div>
    )
}

export default Modal;
