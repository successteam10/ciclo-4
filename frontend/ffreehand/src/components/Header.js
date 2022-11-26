import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/images/GrayEggs2.png';


const Header = () => {

    return (

        <header className="header2">
            <img className="App-logo" src={logo} alt="logo" />
            <nav id="navbar" className="navbar-navbar-expand-lg-navbar-dark-bg-dark">

                <ul className="navbar-nar">
                    <li className="nav-item">
                        <NavLink to="ventas" className="nav-link">{/* <FontAwesomeIcon icon="fa-solid fa-house" /> */}Ventas</NavLink>
                    </li>


                </ul>

            </nav>
        </header>
    );

}

export default Header;