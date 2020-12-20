import React from 'react';

const ModalFooter = ({ openAlert }) => {
    return (
        <footer className="modal-footer">
            <button className="btn-cancel" onClick={openAlert}>Open Alert</button>
        </footer>
    )
}

export default ModalFooter;
