import React from 'react';

const ModalFooter = ({ openAlert, openConsoleLog }) => {
    return (
        <footer className="modal-footer">
            <button className="btn-cancel" onClick={openAlert}>Open Alert</button>
            <button className="btn-cancel" onClick={openConsoleLog}>Open Console Log</button>
        </footer>
    )
}

export default ModalFooter;
