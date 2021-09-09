import React from 'react';
import HalfCircle from "./halfCircle";
import QuarterCircle from "./quaterCircle";
import mag from '../../../assets/Magnifier.svg'
import visit from '../../../assets/Visit Arrow.svg'

/*
This is the center gauge component. It combines all the Half and
Quarter circle components.
*/
const CenterCircle = ({text}) => {
    return (
        <div className="gridItem">
            <div className="circle-container">
                <HalfCircle text={text}/>
                <QuarterCircle className="mag-circle" imgName={mag} imgDesc={"Magnifier Icon"}/>
                <QuarterCircle className="visit-circle" imgName={visit} imgDesc={"Visit Icon"}/>
            </div>
        </div>
    );
};

export default CenterCircle;