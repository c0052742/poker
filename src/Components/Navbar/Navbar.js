import '../Navbar/Navbar.css';
import { NavLink,useNavigate } from 'react-router-dom';
import { useContext, useEffect} from "react";
import { UserContext } from "../../UserContext";

export function Navbar() {
  const { setUserInfo, userInfo } = useContext(UserContext);
   const navigate = useNavigate();

  useEffect(() => {
    fetch('/stats', {
      credentials: 'include',
    }).then(response => {
      response.json().then(userInfo => {
        setUserInfo(userInfo);
      });
    });
  }, [setUserInfo]);

  function logout() {
    fetch('/logout', {
      credentials: 'include',
      method: 'POST',
    });
    setUserInfo(null);
    navigate('/home');
  }

  const username = userInfo?.username;

  return (
  <nav className='navbar'>
    <p>AQARIUM - for all fishes</p>
    <ul className="navUl">
      {!username && (
        <>
          <li className='menu'>
            <NavLink
              className='nav-links'
              to="/home"
              exact={true}
            >
              Home
            </NavLink>
          </li>
          <li className='menu'>
            <NavLink
              className='nav-links'
              to="/register"
              exact={true}
            >
              Register
            </NavLink>
          </li>
          <li className='menu'>
            <NavLink
              className='nav-links'
              to="/login"
              exact={true}
            >
              Login
            </NavLink>
          </li>
        </>
      )}
      {username && (
        <>
          <li className='menu'>
            <NavLink
              className='nav-links'
              to="/stats"
              exact={true}
            >
              Add Stats
            </NavLink>
          </li>
          <li className='menu'>
            <NavLink
              className='nav-links'
              to="/profile"
              exact={true}
            >
              Profile
            </NavLink>
          </li>
          <li className='menu'>
            <NavLink
              className='nav-links'
              to="/games"
              exact={true}
            >
              Games
            </NavLink>
          </li>
          <li className='menu'>
            <button onClick={logout} to="/home" exact={true}>
              Logout ({username})
            </button>
          </li>
        </>
      )}
    </ul>
  </nav>
);

}
