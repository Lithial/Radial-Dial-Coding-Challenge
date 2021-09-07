import './dial.scss';
import mag from '../../assets/Magnifier.svg'
import visit from '../../assets/Visit Arrow.svg'
import React from 'react';
import HalfCircle from "./halfCircle";
import QuaterCircle from "./quaterCircle";
import OuterRing from "./outerRing";


const Dial = ({circleName, indicators}) => {
    return (
        <div className="dial-container">
            <OuterRing indicators={indicators}/>
            <HalfCircle text={circleName}/>
            <QuaterCircle className="mag-circle" imgName={mag} imgDesc={"Magnifier Icon"}/>
            <QuaterCircle className="visit-circle" imgName={visit} imgDesc={"Visit Icon"}/>
            {/*This is to cover the inside of the circle, just in case*/}
            <div className="center-circle"/>
        </div>

    );
};

export default Dial;