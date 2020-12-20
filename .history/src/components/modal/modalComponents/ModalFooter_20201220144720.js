import React from 'react';

const ModalFooter = ({ openAlert, openHtml }) => {
    return (
        <footer className="modal-footer">
            <button className="btn-cancel" onClick={openAlert}>Open Alert</button>
            <button className="btn-cancel" onClick={openHtml}>Open Alert</button>
        </footer>
    )
}

export default ModalFooter;
