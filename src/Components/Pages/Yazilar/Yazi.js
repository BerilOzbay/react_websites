import React from 'react'
import WritingSection from '../../WritingSection'
import { yaziBir,yaziIki,yaziUc,yaziDort } from './Data'
import '../../WritingSection.css'


function Yazi() {

  return (
    <>
      <div className='cards'>
        <div className='cards__container'>
          <div className='cards__wrapper'>
            <ul className='cards__items'>
              <WritingSection {...yaziBir}/>
              <WritingSection {...yaziIki}/>
              </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Yazi