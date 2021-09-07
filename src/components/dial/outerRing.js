import React from 'react';
import mag from '../../assets/Magnifier.svg'
import Indicator from "./indicator";

const OuterRing = ({indicators}) => {

    return (
        <ul className='circle-container'>
            {indicators.map((indicator,index) =>{
                return (<Indicator indicator={indicator} index={index}/>)
            })}
        </ul>
    );
};

export default OuterRing;