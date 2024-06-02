// import { useState } from 'react'
import Header from './components/Header';
import './assets/css/style.css';
import Footer from './components/Footer';
import Home from './pages/Home/Home';
import Reniebin from './pages/RenieBin/Reniebin';
import RenieHub from './pages/RenieHub/RenieHub'; 
import RenieApp from './pages/RenieApp/RenieApp';
import RenieAds from './pages/RenieAds/RenieAds';


function App() {
  return (
    <>
      <Header /> 
      {/* <Home /> */}
      {/* <Reniebin /> */}
       {/* <RenieHub />  */}
       {/* <RenieApp />   */}
       <RenieAds />
      <Footer />
    </>
  );
}

export default App;
