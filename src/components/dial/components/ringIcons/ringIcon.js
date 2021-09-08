import React from 'react';
import './ringIcon.scss';

const getIconPos = (index,numberOfSlices) => {
    let angle = Math.round(360 / numberOfSlices);
    let bamboolzer = [160,80, 45, 35, 25, 18, 15, 10, 8, 6, 3, 4];
    let position = ((angle * index) - (80)+ bamboolzer[numberOfSlices-1]);
    return{
        position: "absolute",
        top: "97px",
        left:"97px",
        margin: "30px",
        transform: `rotate(calc(${position}deg)) translate(118px) rotate(${-position}deg)`
    }
}

const RingIcon = ({indicators}) => {
    const numberOfSlices = indicators.length;
    if(indicators.length >= 1 || indicators<= 12){
        return (
            <div className="gridItem">
                {
                    indicators.map((indicator, index) => {
                        return <li style={getIconPos(index, numberOfSlices)} className={`cross ${indicator.type}`}>x</li>
                    })
                }
            </div>
        );
    }
    else{
        return(<div>

        </div>)
    }
};

export default RingIcon;