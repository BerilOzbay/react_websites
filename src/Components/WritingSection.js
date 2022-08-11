import React,{useEffect} from 'react'
import {Link} from 'react-router-dom'
import './WritingSection.css'

function WritingSection({
path,
label,
src,
alt,
text
}) 

{
  return (
   <>
    <li className="cards__item">
      <Link className="cards__item__link" to={path}>
        {/*figure etiketi bir metinin içinde o metinle bağlantılı 
        bir görsel nesyeni (resim, çizim vs) göstermeye yarar */}
        <figure className="cards__item__pic-wrap" data-category={label}>
          <img src={src} alt={alt} className="cards__item__img" />
        </figure>
        <div className="cards__item__info">
          <h5 className="cards__item__text">{text}</h5>
        </div>
      </Link>
    </li>
    </>
  )
}

export default WritingSection
