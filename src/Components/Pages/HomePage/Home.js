import React from 'react'
import MainSection from '../../MainSection.js'
import {homeObjOne, homeObjTwo, homeObjThree} from './Data'


function Home() {
  
  return (
    <>
    <MainSection {...homeObjOne} />
    <MainSection {...homeObjTwo} />
    <MainSection {...homeObjThree} />
    </>
  )
}

export default Home