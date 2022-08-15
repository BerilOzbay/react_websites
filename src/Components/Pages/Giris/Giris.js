import React from 'react'
import {useFormik} from 'formik'
import './Giris.css'

function Giris() {
  const formik = useFormik({
    /*Baslangic degerleri belirlenir. */
    initialValues: { name: '', email: '', message: "" }},)
  
  return (
    <div>
      <form className='girisForm'>
        <div>
        <label className='girisLabel'> Email:</label>
        <input
        className='girisInput'
        placeholder='Email'
        id='email'
        value={formik.values.email}
        onChange={formik.handleChange('email')}
        />
        </div>

        <div>
        <label  className='girisLabel'> Sifre:</label>
        <input
        className='girisInput'
        placeholder='Sifre'
        id='sifre'
        value={formik.values.sifre}
        onChange={formik.handleChange('sifre')}
        />
        </div>
        <div>
        <button type="submit" className='girisButton'>Giris Yap</button>
        </div>
      </form>
    </div>
  )
  
}
  
export default Giris