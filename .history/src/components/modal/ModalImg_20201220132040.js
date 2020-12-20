import React from 'react';

const ModalImg = ({ src, alt}) => {
    return (
        <div className="modalImg">
            <img src={src} alt={alt} />
        </div>
    )
}

export default ModalImg;
