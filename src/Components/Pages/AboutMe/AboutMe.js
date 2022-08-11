import React from 'react';
import MainSection from '../../MainSection';
import {AboutMeOne, AboutMeTwo,AboutMeThree} from './Data'

function AboutMe() {
    return (
        <>
        <MainSection {...AboutMeOne} />
        <MainSection {...AboutMeTwo} />
        <MainSection {...AboutMeThree} />
        </>
      )
}

export default AboutMe
