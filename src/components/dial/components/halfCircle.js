import React from 'react';
import CurvedText from "./curvedText";
/*
This is the top half circle from the gauge.
*/
const HalfCircle = ({text}) => {

  return(
      <div className="half-circle">
            <CurvedText text={text}/>
      </div>
  )
};

export default HalfCircle;