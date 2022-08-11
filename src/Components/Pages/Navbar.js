import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { MdFingerprint } from 'react-icons/md'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Button} from './Button'
import './Navbar.css'
import {IconContext} from 'react-icons/lib'


function Navbar() {
    const [click, setClick] = useState(false)
    const [button,setButton] = useState(true)
    //Hamburger menü iconunun açılıp kapanması için fonksiyon olusturulur.
    const handleClick = (() => setClick(!click))
    //hamburger menu açıkken herhangi bir yere tıklandığında
    //menunun içeri girmesini sağlar.
    const closeMobileMenu = (() => setClick(false))
    //sayfa genişliği 960 px altında ise hamburger menunun
    //gorunur olmasını ayarlar.
    const showButton = () => {
        if(window.innerWidth <= 960 ){
            setButton(false)
        }

        else{
            setButton(true)
        }
    }
    /*??*/ 
    useEffect(() => {showButton()},[])
    
    /*yeniden sayfa boyutlandırması olduğu anda showButton isleminin cağırılmasını sağlar. */
    window.addEventListener('resize',showButton)


    return (
        <>
        {/*??????*/ }
        <IconContext.Provider value={{color: '#fff'}}>
            <nav className="navbar">
                <div className="navbar-container container">
                    {/*Link etiki a etiketi gibi başka sayfaya yönlendiren ögedir. A tag'ından farkı aynı
            sayfayı yenilemeden sadece yeni bağlantının çağrılmasını sağlamasıdır.Link etiketi
            react-dom ile birlikte gelir. */ }
                    <Link to='/' className="navbar-logo" onClick={closeMobileMenu}>
                    <MdFingerprint className='navbar-icon' />
                    Beril O. - Kisisel Websitesi
                    </Link>
                    {/* onClick itemi ile handleClick Fonksiyonu dinlenir.*/}
                    <div className="menu-icon" onClick={handleClick}>
                        {click ? <FaTimes /> : <FaBars />}
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className="nav-item">
                            {/*onclick ile closeMobile Menu cagırılır ve anasayfa,iletişim ve hakkımda 
                            bağlantılarına dokunulduğunda hamburger menu kaybolur. */}
                            <Link to='/'className="nav-links" onClick={closeMobileMenu}>
                            Anasayfa
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/AboutMe'className="nav-links" onClick={closeMobileMenu}>
                            Hakkimda
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/Yazilar'className="nav-links" onClick={closeMobileMenu}>
                            Yazilar
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/Contact'className="nav-links" onClick={closeMobileMenu}>
                            Iletisim
                            </Link>
                        </li>
                      
                        <li className="nav-btn">
                            {button ? (
                                <Link to='/GirisYap'className="btn-link"  >
                                    <Button button-style='btn--outline'>Giris Yap</Button>
                                </Link>
                            )
                        : (
                                <Link to='/GirisYap' className="btn-link" onClick={closeMobileMenu}>
                                    <Button button-style='btn--outline' buttonSize='btn--mobile'>Giris Yap</Button>
                                </Link>
                        )}
                        </li>
                    </ul>
                </div>
            </nav>
            </IconContext.Provider>
        </>
    )
}

export default Navbar