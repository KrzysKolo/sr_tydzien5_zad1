import React from 'react';

const ModalFooter = ({ closeModalHandler }) => {
    return (
        <footer className="modal-footer">
            <button className="btn-cancel" onClick={closeModalHandler}>Close</button>
        </footer>
    )
}

export default ModalFooter;
