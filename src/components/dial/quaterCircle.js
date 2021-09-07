import React from 'react';

const QuaterCircle = ({className, imgName, imgDesc}) => {
    return (
        <div className={className}>
            <img src={imgName} alt={imgDesc}/>
        </div>
    );
};

export default QuaterCircle;