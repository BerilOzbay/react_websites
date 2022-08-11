import React from 'react';
import './App.css';
import Navbar from './Components/Pages/Navbar';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Home from './Components/Pages/HomePage/Home';
import Footer from './Components/Pages/Footer/Footer';
import AboutMe from './Components/Pages/AboutMe/AboutMe';
import Contact from './Components/Pages/Contact/Contact';
import Giris from './Components/Pages/Giris/Giris'
import Yazi from './Components/Pages/Yazilar/Yazi'
import ScrollToTop from './Components/ScrollToTop';
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
        <Route path='Yazilar'   element={<Yazi/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
