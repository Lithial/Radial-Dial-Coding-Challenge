import React from 'react';
import IndicatorRing from "./components/indicator";
import CenterCircle from "./components/centerCircle";
import RingIcon from "./components/ringIcon";
import '../../styles/main.scss';

/**
 This is the main dial component. It is a stack of other components to
 keep things tidy, The stack is
 - The indicator ring
 - The center under circle
 - The center gauge component.
 */
const Dial = ({circleName}) => {
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