import React from 'react';

const ModalSection = ({title}) => {
    return (
        <section className="modal-content">
            <div className="modal-body">
                <h4>{title}</h4>
                <p>
                 - this unique coffee flavor?
                </p>
                <p>
                 - unusually warm atmosphere?
                </p>

            </div>
        </section>
    )
}

export default ModalSection;
