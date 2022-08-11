import { object, string } from 'yup';
/* Yup kütüphanesi formik kütüphanesi ile uyummlu calisir. Form alanına
girilen degerlerin kısıtlamalarını saglar ve kontrol eder. */

const contactSchema = object({
    name: string().required('Bu alan zorunludur.'),
    email: string().required('Bu alan zorunludur.').email('Gecerli bir mail adresi giriniz'),
    message: string().min(15,'Minimum 15 karakter girilmelidir').required('Bu alan zorunludur.')
  });

  export default contactSchema