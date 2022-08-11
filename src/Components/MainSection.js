import React,{useEffect} from 'react'
import { Button } from './Pages/Button'
import { Link } from 'react-router-dom'
import './MainSection.css'

/*Propslar eklenir.*/
function MainSection({
    lightBg,
    topLine,
    lightText,
    lightTextDesc,
    headline,
    description,
    buttonLabel,
    img,
    alt,
    imgStart,
    yol,
    renk,
}) 
    
{

    return (
        <>
            <div className={lightBg ? 'home__main-section' : 'home__main-section darkBg'}>
                <div className="container">
                    <div className="row home__main-row"
                        style={{ display: 'flex', flexDirection: imgStart === 'start' ? 'row-reverse' : 'row' }}
                    >
                        <div className='col'>
                            <div className='home__main-text-wrapper'>
                                <div className="top-line">{topLine}</div>
                                <h1 className={lightText ? 'heading' : 'heading dark'}>{headline}</h1>
                                <div className={lightTextDesc ? 'home__main-subtitle white' : 'home__main-subtitle dark'}>{description}</div>
                                <Link to= {`/${yol}`} >
                                    <Button  buttonSize='btn--wide'  buttonColor={renk}>{buttonLabel}</Button>
                                </Link>
                            </div>
                        </div>

                        <div className="col">
                            <div className="home__main-img-wrapper">
                                <img src={img} alt={alt} className="home__main-img" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MainSection