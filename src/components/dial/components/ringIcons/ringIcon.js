import React, {useEffect} from 'react';
import './ringIcon.scss';
import {useDial} from "../../../../context/dialContext";

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

const RingIcon = () => {
    const {indicators} = useDial();

    const mapIndicators = (numberOfSlices) => {
        return indicators.map((indicator, index) => {
            return <li key={`ringIcon:${index}`} style={getIconPos(index, numberOfSlices)} className={`cross ${indicator}`}>x</li>
        })
    }
    const updateIcons = () => {
        const numberOfSlices = indicators.length;
        if(indicators.length > 0 && indicators.length < 13){
            return (
                <div className="gridItem">
                    {
                        mapIndicators(numberOfSlices)
                    }
                </div>
            );
        }
        else {
            console.log("else me")
            return (
                <div className="gridItem">
                    {
                    }
                </div>
            );
        }
    }
    useEffect(() => {
        updateIcons();
    },[indicators]);


    return (
        updateIcons()
    )

};

export default RingIcon;