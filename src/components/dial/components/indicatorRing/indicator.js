import React, {useEffect} from 'react';
import './indicatorRing.scss';
import {useDial} from "../../../../context/dialContext";

/*This function allows for the ring to have 1 or two slices*/
const returnCorrectStyles = (index, numberOfSlices, radius, skewCalc) => {
    let degrees = index * radius
    let rotate = `rotate(${degrees}deg)`
    let skew = `skewY( ${skewCalc}deg)`;
    if(numberOfSlices === 0){

    }
    if (numberOfSlices === 1) {
        return {
            overflow: "visible",
            top: "-88%",
            right: "10%",
        }
    }
    else if (numberOfSlices === 2) {
        return {
            overflow: "visible",
            top: "-88%",
            transform: rotate,
            padding: "2px",
        }
    }
    else {
        return {
            overflow: "hidden",
            transform: rotate + ' ' + skew,
            border: "4px solid rgba(255,255,255,.21)"

        }
    }
}
const IndicatorRing = () => {
    const {indicators} = useDial();
    console.log("indicators:" + indicators.length);
    const numberOfSlices = indicators.length;
    const radius = `${(360/numberOfSlices)}`;
    const skewCalc = `${(360/numberOfSlices) + 90}`;

    const loadRing = () => {
        if(indicators.length ){
            return(
                <div className="gridItem">
                    <ul className="sliceWrapper">
                        {
                            indicators.map((indicator, index) => {
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
        else {
            return (
                <div className="gridItem">
                    <ul className="sliceWrapper">

                    </ul>
                </div>
            )
        }
    }

    useEffect(() => {
    },[]);

    return(
        loadRing()
    )
};


export default IndicatorRing;