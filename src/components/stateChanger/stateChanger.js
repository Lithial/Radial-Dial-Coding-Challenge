import React from 'react';
import './stateChanger.scss';
import {useDial} from "../../context/dialContext";

const StateChanger = () => {
    const {addIndicator, removeIndicator} = useDial();

    return (
        <div className="flexContainer">
            <div className={"stateChanger"}>
                <button className="button red" onClick={() => addIndicator("red")}>Add Red</button>
                <button className="button lit" onClick={() => addIndicator("lit")}>Add Lit</button>
                <button className="button unlit" onClick={() => addIndicator("unlit")}>Add Unlit</button>
                <button className="button" onClick={() => removeIndicator()}>Remove Last</button>
            </div>
        </div>

    );
};

export default StateChanger;