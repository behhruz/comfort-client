import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
// import FeaturedProducts from './components/FeaturedProducts';
import TopCategories from './components/TopCategories';
import DeskChairPage from './CategoryPage/DeskChairPage';
import ParkChairPage from './CategoryPage/ParkChairPage';
import RoomChairPage from './CategoryPage/RoomChairPage';
import ScenicChairPage from './CategoryPage/ScenicChairPage';
import BeautifulChairPage from './CategoryPage/BeautifulChairPage';
import WoodenChairPage from './CategoryPage/WoodenChairPage';
import WingChairPage from './CategoryPage/WingChairPage';

const Root = () => {
  return (
    <div>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<><Banner /><TopCategories /></>} />
        <Route path="/desk-chair" element={<><DeskChairPage /></>} />
        <Route path="/park-chair" element={<><ParkChairPage /></>} />
        <Route path="/room-chair" element={<><RoomChairPage /></>} />
        <Route path="/scenic-chair" element={<><ScenicChairPage /></>} />
        <Route path="/beautiful-chair" element={<><BeautifulChairPage /></>} />
        <Route path="/wooden-chair" element={<><WoodenChairPage /></>} />
        <Route path="/wing-chair" element={<><WingChairPage /></>} />
      </Routes>
    </div>
  );
};

export default Root;
