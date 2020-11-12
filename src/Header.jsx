import React from 'react';
import './index.css';
import logo from "./images/logo.png";
function Header(){
    return (
        <>
           <div className ="header">
           <div className="mobile-logo">
                <p><i class="fas fa-bars"></i></p>
                <img src = {logo} alt="banner" className="mlogo"/>
            </div>
            <div className="mobile-menu">
                <div className="active"> <a href = "#">Home</a> </div>
                <div> <a href = "#">Bussiness Solutions</a> </div>
                <div> <a href = "#">Press</a> </div>
                <div> <a href = "#">Careers</a> </div>
                <div> <a href = "#">About us</a> </div>
                <div> <a href = "#">Blog</a> </div>
                <div> <a href = "#">Contact us</a> </div>
            </div>

            <div className="phone-logo">
                <img src = {logo} alt="banner" className="logo"/>
            </div>
            <div className="menu">
                <div className="active"> <a href = "#">Home</a> </div>
                <div> <a href = "#">Bussiness Solutions</a> </div>
                <div> <a href = "#">Press</a> </div>
                <div> <a href = "#">Careers</a> </div>
                <div> <a href = "#">About us</a> </div>
                <div> <a href = "#">Blog</a> </div>
                <div> <a href = "#">Contact us</a> </div>
            </div>
        </div>
        </>
    );
}

export default Header;

