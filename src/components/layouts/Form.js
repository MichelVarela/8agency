import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useForm } from '../../hooks/useForm';
import { validationsForm } from '../../validations/validationForm';

// components 
import Modal from './Modal';

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

  useEffect(() => {
    
    const getCountry = async () => {
      
      const res = await axios ('https://restcountries.com/v3.1/lang/spa');
      const {data} = res;
      const countryfilters = data.filter(el => el.region === 'Americas');
      const country = countryfilters.map(({name}) => name.common);

      country.sort();

      setCountries(country);
    }

    getCountry();

  }, []);

  const {form, errors, check, response, handleChange, handleBlur, handleSubmit} = useForm(initialForm, validationsForm);

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
        </div>
        <div className='content-input'>
          <label htmlFor="surname">Apellido</label>
          <input type="text" name='surname'
          onBlur={ handleBlur } 
          onChange={ handleChange } 
          value={form.surname} 
          className={ errors.surname ? 'incorrect' : null } />
        </div>
        <div className='content-input'>
          <label htmlFor="email">Correo electrónico del trabajo</label>
          <input type="email" 
          name='email'onBlur={ handleBlur } 
          onChange={ handleChange } 
          value={form.email} 
          className={ errors.email ? 'incorrect' : null } />
        </div>
        <div className='content-input'>
          <label htmlFor="country">País</label>
          <select name="country" 
          onBlur={ handleBlur } 
          onChange={ handleChange } 
          value={form.country} 
          className={ errors.country ? 'incorrect' : null } >
            {
              countries.map(el => <option key={el}>{el}</option>)
            }
          </select>
        </div>
        <div className='content-input'>
          <label htmlFor="phone">Número de teléfono</label>
          <input type="tel" name='phone' 
          onBlur={ handleBlur } 
          onChange={ handleChange } 
          value={form.phone} 
          className={ errors.phone ? 'incorrect' : null } />
        </div>
        <div className='content-input'>
          <label htmlFor="job">Puesto de trabajo</label>
          <input type="text" name='job' 
          onBlur={ handleBlur } 
          onChange={ handleChange } 
          value={form.job} 
          className={ errors.job ? 'incorrect' : null } />
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