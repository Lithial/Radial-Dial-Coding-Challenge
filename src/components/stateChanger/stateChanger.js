import React from 'react';
import {useDial} from "../../context/dialContext";

/*
This component holds the test buttons. I didn't really style these or anything
because they weren't a part of the initial design.
*/
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