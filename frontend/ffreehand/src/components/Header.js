import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/images/GrayEggs2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faFile } from '@fortawesome/free-solid-svg-icons';

const Header = () => {

    return (

        <header className="header2">
            <img className="App-logo" src={logo} alt="logo" />
            <nav id="navbar" className="navbar-navbar-expand-lg-navbar-dark-bg-dark">

                <ul className="navbar-nar">
                    <li className="nav-item">
                        <NavLink to="admin/inicio" className="nav-link"><FontAwesomeIcon icon={faHouse} />  Inicio</NavLink>
                    </li>

                    <li className="nav-item1">
                        <NavLink to="admin" className="nav-link1"><FontAwesomeIcon icon={faFile} />  Admin</NavLink>
                    </li>

                </ul>

            </nav>
        </header>
    );

}

export default Header;