import React from 'react';

function Element ({value, color, height}){
        return (
            <div id="bar" className={`${color} ${value}`} >
                <h4>{value}</h4>
            </div>
        )
}

export default Element;
