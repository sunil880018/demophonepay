import React from 'react';
import './index.css';

function Progress(){
    return (
        <>
        <div className ="progress">
            <div>
               <h1>In the Press</h1>
               <p>Read what the press has to say about us.</p>
            </div>
            <div className="all-card">
                 <div>
                     <p>14 October</p>
                     <h2>PhonePe launches vehicle insurance service</h2>
                     <p>Walmart-owned digital payments firm PhonePe has launched insurance products for private cars...</p>
                     <p className="bussi-p">Bussiness Standard <i class="fas fa-arrow-right"></i></p>
                 </div>
                 <div>
                     <p>18 October</p>
                     <h2>PhonePe launches vehicle insurance service</h2>
                     <p>Walmart-owned digital payments firm PhonePe has launched insurance products for private cars...</p>
                     <p className="bussi-p">Bussiness Standard <i class="fas fa-arrow-right"></i></p>
                 </div>
                 <div>
                     <p>20 October</p>
                     <h2>PhonePe launches vehicle insurance service</h2>
                     <p>Walmart-owned digital payments firm PhonePe has launched insurance products for private cars...</p>
                     <p className="bussi-p">Bussiness Standard <i class="fas fa-arrow-right"></i></p>
                 </div>
            </div>
            <h1><button>See All News <i class="fas fa-arrow-right"></i></button></h1>
        </div>
        </>
    );
}

export default Progress;

