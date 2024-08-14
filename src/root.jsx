import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import FeaturedProducts from './components/FeaturedProduct';
import DeskChairs from './pages/DeskChairs';
import TopCategories from './components/TopCategories';
import Testimonials from './components/Comment';
import Login from './components/Registratsia';
import FeaturedProduct from './components/FeaturedProduct';
import Admin from './components/Admin';
import WoodenChairs from './pages/WoodrnChair';
import RoomChairs from './pages/RoomChairs';
import ParkChairs from './pages/ParkChairs';
import Footer from './components/footer';

const Root = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState(null);

  const handleShowLogin = (show) => {
    setShowLogin(show);
  };

  const handleLoginSuccess = (userName) => {
    setLoggedInUser(userName);
    setShowLogin(false);
  };

  return (
    <div>
      <Navbar
        setShowLogin={setShowLogin}
        loggedInUser={loggedInUser}
        setLoggedInUser={setLoggedInUser}
      />
      {showLogin ? (
        <Login onLoginSuccess={handleLoginSuccess} />
      ) : (
        <>
          <Banner />
          <FeaturedProduct/>
          <Routes>
            <Route path="/" element={<TopCategories />} >
            <Route path="category/1" element={<DeskChairs />} />

              <Route path="category/2" element={<WoodenChairs />} />
              <Route path="category/3" element={<DeskChairs />} />
              <Route path="category/4" element={<ParkChairs />} />

              <Route path="category/5" element={<RoomChairs />} />
       

            </Route>
          </Routes>


          <Testimonials loggedInUser={loggedInUser} />
          <Footer/>
        </>
      )}
    </div>
  );
};

export default Root;
