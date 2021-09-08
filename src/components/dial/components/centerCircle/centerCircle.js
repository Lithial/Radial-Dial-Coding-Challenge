import React from 'react';
import HalfCircle from "../halfCircle/halfCircle";
import QuarterCircle from "../quarterCircle/quaterCircle";
import mag from '../../../../assets/Magnifier.svg'
import visit from '../../../../assets/Visit Arrow.svg'
import './centerCircle.scss';

const CenterCircle = ({text}) => {
    return (
        <div className="gridItem">
            <div className="container">
                <HalfCircle text={text}/>
                <QuarterCircle className="mag-circle" imgName={mag} imgDesc={"Magnifier Icon"}/>
                <QuarterCircle className="visit-circle" imgName={visit} imgDesc={"Visit Icon"}/>
            </div>
        </div>
    );
};

export default CenterCircle;