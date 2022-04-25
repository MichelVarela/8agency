import { useState, useEffect } from 'react';
import axios from 'axios';

export const useForm = (initialForm, validationsForm) => {

    const [form, setForm] = useState(initialForm);
    const [errors, setErrors] = useState({});
    const [check, setCheck] = useState(false);
    const [response, setResponse] = useState(null);

    const handleChange = e => {
        const {name, value} = e.target;
        setForm({...form, [name]: value});
    }
    
    const handleBlur = (e) => {
      handleChange(e);
      setErrors(validationsForm(form));
    };

    const handleSubmit = async e => {
      e.preventDefault();
      setErrors(validationsForm(form));

      if (!errors.name && !errors.surname && !errors.email && !errors.country && !errors.phone && !errors.job) {
        try {
          const res = await axios.post('http://localhost:4000/api/register', form);
          setCheck(true);
          setResponse(res);
        } catch (err) {
          console.log(err);
        }
      }
    }

    useEffect(() => { 
      
      if (check === true) {
        setTimeout(() => {
          setCheck(false);
        }, 5000);
      }

    }, [check]);

  return { form, errors, check, response, handleChange, handleBlur, handleSubmit }
}
