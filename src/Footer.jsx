import React from 'react';
import './index.css';
import flogo from './images/logo.png';
import sisa from "./images/sisa.png";
const href = "#";
function Footer(){
    return (
        <>
        <div className ="footer">
            <div>
                <img src={flogo} alt="footer-img" width="200px" height="114px"/>
            </div>
            <div>
                <ul>
                    <li><a href={href} className="first-a">General</a></li>
                    <li><a href={href}>About Us</a></li>
                    <li><a href={href}>Bussiness Solutions</a></li>
                    <li><a href={href}>Report Vulnerablility</a></li>
                    <li><a href={href}>Merchent Partner</a></li>
                </ul>
            </div>
            <div>
                <ul>
                    <li><a href={href} className="first-a">Connect</a></li>
                    <li><a href={href}>Careers</a></li>
                    <li><a href={href}>Contact us</a></li>
                    <li><a href={href}>Ethics</a></li>
                    <li><a href={href}>Blog</a></li>
                </ul>
            </div>
            <div>
                <ul>
                    <li><a href={href} className="first-a">Legal</a></li>
                    <li><a href={href}>Terms and Conditions</a></li>
                    <li><a href={href}>Policy</a></li>
                    <li><a href={href}>How to pay</a></li>
                    <li><a href={href}>E-waste Policy</a></li>
                </ul>
            </div>
            <div>
                <ul>
                    <li><a href={href} className="first-a">Certifications</a></li>
                    <li><a href={href}><img src={sisa} alt="sisa" width="100px" height="80px"/></a></li>
                    
                </ul>
            </div>
            <div>
                <ul>
                    <li><a href={href} className="first-a">See All Apps</a></li>
                    <li><button>DOWNLOAD NOW</button></li>
                    <li><i class="fab fa-linkedin-in"></i><i class="fab fa-twitter"></i><i class="fab fa-facebook"></i></li>
                    <li><a> &copy;  2020 All Right Reserved</a></li>
                </ul>
            </div>
        </div>
        </>
    );
}

export default Footer;

