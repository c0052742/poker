import './appstyle.css';
import React from 'react';
import { motion } from 'framer-motion';
import { Route, Routes, useLocation, Outlet } from 'react-router-dom';
import Home from './Pages/Home/Home';
import RegisterPage from './Pages/register/Register';
import LoginPage from './Pages/login/Login';
import StatPage from './Pages/Stats/Stats';
import { Navbar } from './Components/Navbar/Navbar';
import { UserContextProvider } from "./UserContext";
import Games from './Pages/Games/Games';
import PlayerProfile from './Pages/profile/profile';

const AnimationLayout = () => {
  const { pathname } = useLocation();

  const pageVariants = {
    initial: {
      opacity: 0,
      x: '-25%',
    },
    in: {
      opacity: 1,
      x: '0%',
    },
    out: {
      opacity: 0,
      x: '100%',
    },
  };

  const pageTransition = {
    type: 'spring',
    ease: 'easeInOut',
    duration: 1,
  };

  return (
    <motion.div
      key={pathname}
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <Outlet />
    </motion.div>
  );
};

const App = () => {
  return (
    <div >
      <UserContextProvider >
        <Navbar /> 
        <Routes >
          <Route path="/" element={<AnimationLayout />}>
            <Route index element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="register" element={<RegisterPage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="stats" element={<StatPage />} />
            <Route path="games" element={<Games />} />
            <Route path="profile" element={<PlayerProfile />} />
          </Route>
        </Routes>
        <div className="content"></div>
      </UserContextProvider>
    </div>
  );
};

export default App;
