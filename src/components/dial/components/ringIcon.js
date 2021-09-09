import React from 'react';
import {useDial} from "../../../context/dialContext";

/*
This is where I do some math and magic to make the crosses appear on the
red indicators.
*/

/*Custom styles for the ring of icons*/
const getIconPos = (index,numberOfSlices) => {
    let angle = Math.round(360 / numberOfSlices);
    //Don't look at these definitely not hardcoded values for adjusting up
    // to the first 12 indicators
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

/*The component itself.*/
const RingIcon = () => {
    //grab the context
    const {indicators} = useDial();

    // This maps the indicators to list items. It requires the number
    // of slices.
    const mapIndicators = (numberOfSlices) => {
        return indicators.map((indicator, index) => {
            return <li key={`ringIcon:${index}`} style={getIconPos(index, numberOfSlices)} className={`cross ${indicator}`}>x</li>
        })
    }

    // Here we either map the icons or return a blank div if the right
    // conditions are met

    const updateIcons = () => {
        const numberOfSlices = indicators.length;
        //Guard clause for when we dont want indicators
        if(indicators.length < 0 || indicators.length >11)
        {
            return (<div className="gridItem"/>);
        }
        return (
            <div className="gridItem">
                {mapIndicators(numberOfSlices)}
            </div>
        );

    }

    return (
        updateIcons()
    )

};

export default RingIcon;