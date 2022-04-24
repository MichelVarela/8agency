import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useForm } from '../../hooks/useForm';
import { validationsForm } from '../../validations/validationForm';

// components 
import Modal from './Modal';

// images
import confirmed from '../../images/check-square.png';

const initialForm = {
  name:'',
  surname: '',
  email: '',
  country: '',
  phone: '',
  job: ''
};

const Form = () => {

  const [countries, setCountries] = useState([]);
  const [mail, setMails] = useState([]);

  useEffect(() => {
    
    const getCountry = async () => {
      
      const res = await axios ('https://restcountries.com/v3.1/lang/spa');
      const {data} = res;
      const countryfilters = data.filter(el => el.region === 'Americas');
      const country = countryfilters.map(({name}) => name.common);

      country.sort();

      setCountries(country);
    }

    const getMails = async () => {
      
      const res = await axios('http://localhost:4000/api/registerConfirmed');
      const {data} = res;
      const registers = data.data.registers.map(({email}) => email);

      setMails(registers);
    }

    getCountry();
    getMails();

  }, []);

  const {form, errors, check, handleChange, handleBlur, handleSubmit} = useForm(initialForm, validationsForm);
  
  return (
    <div className="content-form">
      <h2>¡Inscríbete y reserva tu lugar ahora!</h2>
      <form onSubmit={ handleSubmit }>
        <div className='content-input'>
          <label htmlFor="name">Nombre</label>
          <input type="text" name='name' 
          onBlur={ handleBlur } 
          onChange={ handleChange } 
          value={form.name} 
          className={ errors.name ? 'incorrect' : null } />
          <img src={confirmed} alt='check-square' className={ errors.name === false ? 'off on' : 'off' }/>
        </div>
        <div className='content-input'>
          <label htmlFor="surname">Apellido</label>
          <input type="text" name='surname'
          onBlur={ handleBlur } 
          onChange={ handleChange } 
          value={form.surname} 
          className={ errors.surname ? 'incorrect' : null } />
          <img src={confirmed} alt='check-square' className={ errors.surname === false ? 'off on' : 'off' }/>
        </div>
        <div className='content-input'>
          <label htmlFor="email">Correo electrónico del trabajo</label>
          <input type="email" 
          name='email'onBlur={ handleBlur } 
          onChange={ handleChange } 
          value={form.email} 
          className={ errors.email ? 'incorrect' : null } />
          {
            mail.map(el => {
              if (el === form.email) {
                errors.email = true;
                return <span key={el}>Usuario registrado</span>
              }
            })
          }
          <img src={confirmed} alt='check-square' className={ errors.email === false ? 'off on' : 'off' }/>
        </div>
        <div className='content-input'>
          <label htmlFor="country">País</label>
          <select name="country" 
          onBlur={ handleBlur } 
          onChange={ handleChange } 
          value={form.country} 
          className={ errors.country ? 'incorrect' : null } >
            <option>Selecciona un país</option>
            {
              countries.map(el => <option key={el}>{el}</option>)
            }
          </select>
          <img src={confirmed} alt='check-square' className={ errors.country === false ? 'off on' : 'off' }/>
        </div>
        <div className='content-input'>
          <label htmlFor="phone">Número de teléfono</label>
          <input type="tel" name='phone' 
          onBlur={ handleBlur } 
          onChange={ handleChange } 
          value={form.phone} 
          className={ errors.phone ? 'incorrect' : null } />
          <img src={confirmed} alt='check-square' className={ errors.phone === false ? 'off on' : 'off' }/>
        </div>
        <div className='content-input'>
          <label htmlFor="job">Puesto de trabajo</label>
          <input type="text" name='job' 
          onBlur={ handleBlur } 
          onChange={ handleChange } 
          value={form.job} 
          className={ errors.job ? 'incorrect' : null } />
          <img src={confirmed} alt='check-square' className={ errors.job === false ? 'off on' : 'off' }/>
        </div>
        <button>Inscríbete</button>
      </form>
      {
        check === true ? <Modal/> : null
      }
    </div>
  )
}

export default Form