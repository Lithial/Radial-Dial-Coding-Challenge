import React from 'react';

const returnCorrectStyles = (index, numberOfSlices, radius, skewCalc) => {
    let degrees = index * radius
    let rotate = `rotate(${degrees}deg)`
    let skew = `skewY( ${skewCalc}deg)`;
    if (numberOfSlices === 1) {
        return {
            overflow: "visible",
            top: "-90%",
            right: "10%",
        }
    }
    else if (numberOfSlices === 2) {
        return {
            overflow: "visible",
            top: "-90%",
            color: "blue",
            transform: rotate,
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
        <div>
            <ul className="sliceWrapper">
                {
                    indicators.map((indicator, index) => {
                        const style = returnCorrectStyles(index, numberOfSlices, radius, skewCalc)
                        return (
                            <li style={style} className="chunk">
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