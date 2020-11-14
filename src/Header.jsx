import React from 'react';
import './index.css';
import logo from "./images/logo.png";
function Header(){
    const openMenu = () =>{
        document.querySelector('.mobile-menu').classList.add("open");
    }
    const closeMenu = () =>{
        document.querySelector('.mobile-menu').classList.remove("open");
    }
    return (
        <>
           <div className ="header">
               <div className="mobile-logo">
                <p><i class="fas fa-bars" onClick ={openMenu}></i></p>
                <div><img src = {logo} alt="banner" className="mlogo"/></div>
              </div>
            <div className="mobile-menu">
                <button onClick ={closeMenu}>x</button>
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

