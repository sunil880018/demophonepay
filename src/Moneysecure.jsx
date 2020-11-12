import React from 'react';
import './index.css';
import secure from './images/secure.png';
import pci from './images/pci.png';
import iso from './images/iso.png';
function Moneysecure(){
    return (
        <>
        <div className ="trust-banner">
            <img src={secure} className="trust"/>
            <div>
               <h1>Your money stays safe.</h1>
               <p>PhonePe protects your money with the best-in-class security systems that help minimize frauds.</p>
               <div className="pci-iso">
                   <img src={pci}/>
                   <img src={iso} className="iso"/>
               </div>
            </div>
        </div>
        </>
    );
}

export default Moneysecure;

