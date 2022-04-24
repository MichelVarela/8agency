import { useState } from 'react';
import axios from 'axios';

export const useForm = (initialForm, validationsForm) => {

    const [form, setForm] = useState(initialForm);
    const [errors, setErrors] = useState({});
    const [check, setCheck] = useState(false);
    const [response, setResponde] = useState(null);

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

      if (Object.keys(errors).length === 0) {
        try {
          const res = await axios.post('http://localhost:4000/register', form);
          setCheck(true);
          console.log(res);
        } catch (err) {
          console.log(err);
        }
      }
    }

  return { form, errors, check, response, handleChange, handleBlur, handleSubmit }
}
