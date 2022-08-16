import React ,{useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import './Yazi.css'

function Yazi() {
  const [yazi,setYazi] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => setYazi(data));
  },[]);

  return (
    <>
    <h2 className='baslik'>Yazilar</h2>
    <Link to='/YaziEkle'>
    <button type='submit' className='yaziButton'>Yeni Yazi Ekle</button>
    </Link>
    <div className='yazi'>
      <ul className='yazi_container'>
    {
      yazi.map((yazi)=> (
        <div className='yazi_cards'>
        <li key={yazi.id}>
        <figure className="cards__item__pic-wrap">
          <img src='/images/2203_w026_n002_1540b_p1_1540.jpg' alt='deneme' className="cards__item__img" />
        </figure>
        <Link to={`${yazi.id}`}>{yazi.title}</Link>
        </li>
        </div>
      ))
    }
    </ul>
    </div>
    </>
    
  )
}

export default Yazi