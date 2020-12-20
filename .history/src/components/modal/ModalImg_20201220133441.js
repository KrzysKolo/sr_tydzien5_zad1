import React from 'react';

const ModalImg = ({ src, alt}) => {
    return (
        <div className="modalImg">
            <img src={require('./coffee.jpg')} alt={alt} />
        </div>
    )
}

export default ModalImg;
