import React, {useState} from 'react'
import {AiOutlinePlusCircle} from 'react-icons/ai'
import './YaziEkle.css'


function YaziEkle() {
  const [img,setImg] = useState()

  const onImageChange = (e) =>{
    const[file] = e.target.files;
    setImg(URL.createObjectURL(file))
  }

  return (
    <div className='write'>
      <img className='writeImg' src={img} alt='Hikayenizin resmi buraya!'></img>
      <form className='writeForm'>

        <div className='writeFormGroup'>
        <label className='writeIcon'> {<AiOutlinePlusCircle/>} 
        <input type='file' id='file' onChange={onImageChange} style={{display:'none'}} />
        </label>

      
        <input 
        type='text'
        id='title'
        name='title'
        placeholder='Baslik'
        className='writeInput'
        />
        </div>


        <div className='writeFormGroup'>
       <textarea
        type='text'
        id='yazi'
        name='yazi'
        placeholder='Hikayeni anlat...'
        className='writeText'
        />
        </div>

        <button className='writeSubmit'>Yayinla!</button>


      </form>
    </div>
  )
}

export default YaziEkle
 