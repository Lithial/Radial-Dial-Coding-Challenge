import React from 'react';
import './halfCircle.scss'
import CurvedText from "../curvedText/curvedText";

const HalfCircle = ({text}) => {

  return(
      <div className="half-circle">
            <CurvedText text={text}/>
      </div>
  )
};

export default HalfCircle;