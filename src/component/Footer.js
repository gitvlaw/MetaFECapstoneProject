import React from "react";
import logofooter from '../icons_assets/logo-footer.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faLocationDot, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faTwitter ,faFacebook } from '@fortawesome/free-brands-svg-icons';
import { NavLink } from "react-router-dom";
import '../style/footer.css';


export default function Footer() {
    return(
        <div className="footer-parent">
            <footer className="footer">
                <div>
                    <img className="footer-logo" src={logofooter} alt="Logo Footer" />
                </div>
                <nav className="footer-nav">
                    <ul>
                        <li className="footer-nav-li">
                            <NavLink to="/" className="footer-navlink" activeClassName="active-footer">Home</NavLink>
                        </li>
                        <li className="footer-nav-li">
                            <NavLink to="/about" className="footer-navlink" activeClassName="active-footer">About</NavLink>
                        </li>
                        <li className="footer-nav-li">
                            <NavLink to="/menu" className="footer-navlink" activeClassName="active-footer">Menu</NavLink>
                        </li>
                        <li className="footer-nav-li">
                            <NavLink to="/reservation" className="footer-navlink" activeClassName="active-footer">Reservation</NavLink>
                        </li>
                        <li className="footer-nav-li">
                            <NavLink to="/order-online" className="footer-navlink" activeClassName="active-footer">Order Online</NavLink>
                        </li>
                        <li className="footer-nav-li">
                            <NavLink to="/login" className="footer-navlink" activeClassName="active-footer">Login</NavLink>
                        </li>
                    </ul>
                </nav>
                <nav className="footer-address">
                    <ul>
                        <li className="footer-address-li">
                            <a className="footer-adress-icon" href="tel:01-111-222-333" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faPhone} className="icon-nav"  /> +01 111 222 333
                            </a>
                        </li>
                        <li className="footer-address-li">
                            <a className="footer-adress-icon" href="https://goo.gl/maps/xJ1wc1utJV9ez3Br5" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faLocationDot} className="icon-nav" /> Chicago-34 Bree Street
                            </a>
                        </li>
                        <li className="footer-address-li">
                            <a className="footer-adress-icon" href="mailto:littlelemon@example.com" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faEnvelope} className="icon-nav" /> littlelemon@example.com
                            </a>
                        </li>
                    </ul>
                </nav>
                <nav className="footer-social-link">
                    <ul>
                        <li className="footer-social-li">
                            <a className="footer-social-icon" href="https://twitter.com/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTwitter} className="icon-nav" /> Twitter</a>
                        </li>
                        <li className="footer-social-li">
                            <a className="footer-social-icon" href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebook} className="icon-nav" /> Facebook</a>
                        </li>
                    </ul>
                </nav>
            </footer>
        </div>
    );
}