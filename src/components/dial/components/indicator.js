import React from 'react';
import {useDial} from "../../../context/dialContext";

/*
Adjustable Styles based on the number of indicators. Special cases for one
and two slices.
*/
const returnCorrectStyles = (index, numberOfSlices, radius, skewCalc) => {
    let degrees = index * radius
    let rotate = `rotate(${degrees}deg)`
    let skew = `skewY( ${skewCalc}deg)`;


    //Switch statement to handle the different styling cases
    switch (numberOfSlices)
    {
        case 1:{
            return {
                overflow: "visible",
                top: "-88%",
                right: "10%",
            }
        }
        case 2: {
            return {
                overflow: "visible",
                top: "-88%",
                transform: rotate,
                padding: "2px",
            }
        }
        default: {
            return {
                overflow: "hidden",
                transform: rotate + ' ' + skew,
                border: "4px solid rgba(255,255,255,.21)"

            }
        }
    }
}
/*This is the Outer Ring component*/
const IndicatorRing = () => {
    const {indicators} = useDial(); //call the context
    const numberOfSlices = indicators.length;
    const radius = `${(360/numberOfSlices)}`;
    const skewCalc = `${(360/numberOfSlices) + 90}`;

    const loadRing = () => {
        //Guard clause for when there are no indicators
        if (!indicators.length){
            return (
                <div className="gridItem">
                    <ul className="sliceWrapper">

                    </ul>
                </div>
            )
        }
        return(
            <div className="gridItem">
                <ul className="sliceWrapper">
                    {
                        /*Map all of the indicators to a list item*/
                        indicators.map((indicator, index) => {
                            /*Styles are created dynamically so that the indicators appear at
                            the right spot on the circle based on math*/
                            const style = returnCorrectStyles(index, numberOfSlices, radius, skewCalc)
                            return (
                                <li key={`indicator:${index}`} style={style} className={`chunk`}>
                                    <div className={`slice ${indicator}`}/>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>)
    }


    return(
        loadRing()
    )
};


export default IndicatorRing;