import React from 'react';
import './index.css';
import mysrc from './images/home-fast-secure.mp4';
function Fastsecure(){
    return (
        <>
        <div className ="fastSecure">
            <div className="fast-explain">
               <div className="fast-h"><h1>Simple, Fast & Secure</h1></div>
               <div><h2>Pay whenever you like, wherever you like.</h2><p>Choose from options like BHIM UPI, the PhonePe wallet or your Debit and Credit Card.</p></div>
               <div><h2>One app for all things money.</h2><p>Pay bills, recharge, send money, buy gold, invest and shop at your favourite stores.</p></div>
               <div className="last-h"><h2>Find all your favourite apps on PhonePe Switch.</h2><p>Book flights, order food or buy groceries. Use all your favourite apps without downloading them.</p></div>
            </div>
            <div className="fast-video">
                 <video src={mysrc}  autoPlay loop muted></video>
            </div>
        </div>
        </>
    );
}

export default Fastsecure;

