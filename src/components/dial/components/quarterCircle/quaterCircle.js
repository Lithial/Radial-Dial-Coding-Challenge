import React from 'react';
import './quarterCircle.scss';
const QuarterCircle = ({className, imgName, imgDesc}) => {
    return (
        <div className={className}>
            <img src={imgName} alt={imgDesc}/>
        </div>
    );
};

export default QuarterCircle;