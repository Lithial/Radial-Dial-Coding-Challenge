import React from 'react';

/*
Quarter circle button components. Made generic to handle both buttons.
*/
const QuarterCircle = ({className, imgName, imgDesc}) => {
    return (
        <div className={className}>
            <img src={imgName} alt={imgDesc}/>
        </div>
    );
};

export default QuarterCircle;