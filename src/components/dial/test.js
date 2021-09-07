import React from 'react';
import './test.scss';

const Test = () => {
    return (
      <div>
          <ul className="sliceWrapper">
              <li>
                  <div className="chunk">
                      <div className="slice"/>
                      {/*<div className="cross">x</div>*/}
                  </div>
              </li>
              <li className="chunk">
                  <div className="slice"/>
              </li>
              <li className="chunk">
                  <div className="slice"/>
              </li>
              <li className="chunk">
                  <div className="slice"/>
              </li>
              <li className="chunk">
                  <div className="slice">
                      {/*<div className="cross">x</div>*/}
                  </div>
              </li>
              <li className="chunk">
                  <div className="slice">
                      {/*<div className="cross">x</div>*/}
                  </div>
              </li>
              <li className="chunk">
                  <div className="slice"/>
              </li>
              <li className="chunk">
                  <div className="slice"/>
              </li>
          </ul>
          <div className="center"/>
          {/*<div className="cross">x</div>*/}
      </div>
    );
};

export default Test;