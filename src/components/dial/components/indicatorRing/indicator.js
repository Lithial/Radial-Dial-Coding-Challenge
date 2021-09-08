import React from 'react';
import './indicatorRing.scss';

/*This function allows for the ring to have 1 or two slices*/
const returnCorrectStyles = (index, numberOfSlices, radius, skewCalc) => {
    let degrees = index * radius
    let rotate = `rotate(${degrees}deg)`
    let skew = `skewY( ${skewCalc}deg)`;
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
        }
    }
}
const IndicatorRing = ({indicators}) => {
    const numberOfSlices = indicators.length;
    const radius = `${(360/numberOfSlices)}`;
    const skewCalc = `${(360/numberOfSlices) + 90}`;

    return (
        <div className="gridItem">
            <ul className="sliceWrapper">
                {
                    indicators.map((indicator, index) => {
                        const style = returnCorrectStyles(index, numberOfSlices, radius, skewCalc)
                        return (
                            <li style={style} className={`chunk`}>
                                <div className={`slice ${indicator.type}`}/>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    );
};


export default IndicatorRing;