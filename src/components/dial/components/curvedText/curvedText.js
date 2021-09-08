import React from 'react';
import './curvedText.scss';
const CurvedText = ({ text, objectSize = 90, spacing = 15, offset = 25, overlap = false }) => {
    const d = objectSize + spacing * 2;
    const r = objectSize / 2 + spacing /2;

    return (
        <div className="text">
            <svg viewBox={`0 0 ${d + offset * 2} ${r + offset * 2}`}>
                <path id="curve" d={`M${offset},${r + offset} A${r},${r} 0 0,1 ${d + offset},${r + offset}`} />
                <text width="500">
                    <textPath xlinkHref="#curve" startOffset="50%">
                        {text}
                    </textPath>
                </text>
            </svg>
        </div>
    )

};
export default CurvedText;