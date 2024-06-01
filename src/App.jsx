// import { useState } from 'react'
import Header from './components/Header';
import './assets/css/style.css';
import Footer from './components/Footer';
import Home from './pages/Home/Home';
import Reniebin from './pages/RenieBin/Reniebin';
import RenieHub from './pages/RenieHub/RenieHub'; 
import RenieApp from './pages/RenieApp/RenieApp';

function App() {
  return (
    <>
      <Header /> 
      {/* <Home /> */}
      {/* <Reniebin /> */}
       {/* <RenieHub />  */}
       <RenieApp />  
      <Footer />
    </>
  );
}

export default App;
