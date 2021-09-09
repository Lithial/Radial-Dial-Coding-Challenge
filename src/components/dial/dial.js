import './dial.scss';
import React from 'react';
import IndicatorRing from "./components/indicatorRing/indicator";
import CenterCircle from "./components/centerCircle/centerCircle";
import RingIcon from "./components/ringIcons/ringIcon";


const Dial = ({circleName, indicators}) => {
    return (
        <div className="flexContainer">
            <div className="dial-container">
                <IndicatorRing/>
                <div className="gridItem">
                    <div className="center"/>
                </div>
                <CenterCircle text={circleName}/>
                <RingIcon/>
                {/*<StateChanger/>*/}
            </div>
        </div>
    );
};

export default Dial;