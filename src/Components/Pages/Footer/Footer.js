import React from 'react';
import './Footer.css';
import { Button } from '../Button';
import { Link } from 'react-router-dom';
import {
  FaGithub,
  FaInstagram,
  FaTwitter,
  FaLinkedin
} from 'react-icons/fa';
import { MdFingerprint } from 'react-icons/md';

function Footer() {
  return (
    <div className='footer-container'>
      {/*Baska kullanıcıların üye olabileceği input kısmı olusturulur. */}
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Seninde paylasacagin seyler varsa uye olabilirsin
        </p>
        <p className='footer-subscription-text'>
          Aramizda gormek icin sabirsizlaniyoruz 
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Email Adresiniz'
            />
            <Button buttonStyle='btn--outline'>Abone ol</Button>
          </form>
        </div>
      </section>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
              <MdFingerprint className='navbar-icon' />
              Beril O.
            </Link>
          </div>
          <small className='website-rights'>B.O © 2022</small>
          <div className='social-icons'>
            <Link
              className='social-icon-link'
              to={
                '//www.instagram.com/berilozbay/'
              }
              target='_blank'
              aria-label='Instagram'
            >
              <FaInstagram />
            </Link>
            <Link
              className='social-icon-link'
              to={
                '//github.com/BerilOzbay'
              }
              target='_blank'
              aria-label='Youtube'
            >
              <FaGithub />
            </Link>
            <Link
              className='social-icon-link'
              to={'//twitter.com/berilozby'}
              target='_blank'
              aria-label='Twitter'
            >
              <FaTwitter />
            </Link>
            <Link
              className='social-icon-link'
              to={'//www.linkedin.com/in/beril-ozbay/'}
              target='_blank'
              aria-label='LinkedIn'
            >
              <FaLinkedin />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;