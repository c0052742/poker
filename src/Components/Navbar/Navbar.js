
import '../Navbar/Navbar.css';
import {NavLink} from 'react-router-dom';
import poker from "./logo.svg";

export function Navbar() {
    return (
        <nav className='navbar'>
            <img src={poker} className='logo' alt=''/>
            <ul className="navUl">
               <li className='menu'>
                <NavLink
                className='nav-links'
                to="/home"
                activeClassName="active"
                exact> Home
                </NavLink>
                </li>
            <li className='menu'>
                <NavLink
                className='nav-links'
                to="/register"
                activeClassName="active"
                exact>
                Register </NavLink>
            </li>
            <li className='menu'>
                <NavLink
                className='nav-links' 
                to="/login"
                activeClassName="active"
                exact>
                     Login </NavLink>
            </li>
            <li className='menu'>
            <NavLink
                className='nav-links' 
                to="/stats"
                activeClassName="active"
                exact>
                     Stats </NavLink>
            </li>
           </ul>
        </nav>
        )

}