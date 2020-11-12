import React from 'react';
import './index.css';
import img from './images/tm.png';
function Safety(){
    return (
        <>
        <div className ="safety">
            <div>
                <img src={img}/>
            </div>
            <div className="para">
                <p>Every day we wake up, learn to navigate life into 'the new normal' and help each other to keep going - all this with a smile behind our masks. This is our ode to #Unstoppablelndia</p>
            </div>
        </div>
        </>
    );
}

export default Safety;

