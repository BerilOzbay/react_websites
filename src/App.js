import React from 'react';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import './App.css';

import Navbar from './Components/Pages/Navbar';
import Home from './Components/Pages/HomePage/Home';
import Footer from './Components/Pages/Footer/Footer';
import AboutMe from './Components/Pages/AboutMe/AboutMe';
import Contact from './Components/Pages/Contact/Contact';
import Giris from './Components/Pages/Giris/Giris'
import Yazi from './Components/Pages/Yazilar/Yazi'
import ScrollToTop from './Components/ScrollToTop';
import YaziDetay from './Components/Pages/Yazilar/YaziDetay';
import YaziEkle from './Components/Pages/Yazilar/YaziEkle';


function App() {
  return (
    <Router>
      <Navbar/>
      <ScrollToTop/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/AboutMe' element={<AboutMe/>} />
        <Route path='/Contact' element={<Contact/>} />
        <Route path='/GirisYap' element={<Giris/>} />
        <Route path='/Yazilar'   element={<Yazi/>}/>
        <Route path='/Yazilar/:id'   element={<YaziDetay/>}/>
        <Route path='/YaziEkle'   element={<YaziEkle/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
