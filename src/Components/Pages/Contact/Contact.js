import React from 'react'
//formik kütüphanesi form yönetimini kolaylaştırır ve validasyon
//islemlerini saglar.
import { useFormik } from 'formik';
import Validations from './Validations'
import './Contact.css'


function Contact() {
    const formik = useFormik({
    /*Baslangic degerleri belirlenir. */
    initialValues: { name: '', email: '', message: "" },

    onSubmit: async (values, bag) => {
      /*Veri girisi yapılıp gonderildikten sonra 1 saniye beklemeye yarar */
      await new Promise((r) => setTimeout(r, 1000));
      console.log(values);
      /*bag parametresi ile birlikte forma giris yapıldıktan sonra
      formun resetlenmesini saglar. */
      bag.resetForm();
    },
    /*Validasyon şemasına hazırlanan komponent verilir. */
    validationSchema: Validations

  })

  return (
    <>
    <div className='baslik'>Iletisim</div>
    <div className='row contact-row'>
      
      <form onSubmit={formik.handleSubmit} className="form">
        <div>
          <label className='contactLabel'>Isim</label>
          <input
            className='contactInput'
            placeholder='Isim'
            id="name"
            name="name"
            /*values ifadesi initial olarak verilen degerlerin gozukmesini saglar. */
            value={formik.values.name}
            /*gonderim esnasında bilgi girmesini engeller */
            disabled={formik.isSubmitting}
            /*touched bilgisini tutar. */
            onBlur={formik.handleBlur('name')}
            //handleChange ile girilen verinin aktarilmasini saglar.
            onChange={formik.handleChange("name")}
          />
          {/*formik altında touched adında boolean degisken input alanına tıklandıgında veya
          ayrılındıgında true,false bir deger doner*/
            /* Tum mesajların tek bir hatada gozukmesinin onune gecer. */
            formik.errors.name && formik.touched.name && <div className='errors'>{formik.errors.name}
            </div>
          }
          
        </div>

        <div>
          <label className='contactLabel' >Email</label>
          <input
            className='contactInput'
            id="email"
            placeholder='E-mail'
            type="email"
            name="email"
            value={formik.values.email}
            disabled={formik.isSubmitting}
            onBlur={formik.handleBlur('email')}
            onChange={formik.handleChange("email")}
          />

          {
            formik.errors.email && formik.touched.email && <div className='errors'>{formik.errors.email}</div>
          }

        </div>

        <div>
          <label className='contactLabel'>Mesaj</label>
          <textarea
            className='contactTextArea'
            id="message"
            name="message"
            placeholder='Mesajinizi buraya yazabilirsiniz.'
            value={formik.values.message}
            disabled={formik.isSubmitting}
            onBlur={formik.handleBlur('message')}
            onChange={formik.handleChange("message")}
          />
          {
            formik.errors.message && formik.touched.message && <div className='errors'>{formik.errors.message}</div>
          }
        </div>
        <button type="submit" className="contactButton" disabled={formik.isSubmitting} >
          Gonder
        </button>

      </form>

      <div className="home__main-img-wrapper">
        <img src='/images/7495.jpg' alt='resim' className="contact-img" />
      </div>
    </div>
    </>
  )
}

export default Contact

