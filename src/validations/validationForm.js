export const validationsForm = form => {

    let errors = {};
    let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
    
    if (!form.name.trim()) {
      errors.name = "El campo 'Nombre' es requerido";
    } else if (!regexName.test(form.name.trim())) {
      errors.name = "El campo 'Nombre' sólo acepta letras y espacios en blanco";
    }
    
    if (!form.surname.trim()) {
      errors.surname = "El campo 'Apellido' es requerido";
    } else if (!regexName.test(form.surname.trim())) {
      errors.surname = "El campo 'Apellido' sólo acepta letras y espacios en blanco";
    }
    
    if (!form.email.trim()) {
      errors.email = "El campo 'Email' es requerido";
    } else if (!regexEmail.test(form.email.trim())) {
      errors.email = "El campo 'Email' es incorrecto";
    }
    
    if (!form.country.trim()) {
      errors.country = "El campo 'country' es requerido";
    }
    
    if (!form.phone.trim()) {
      errors.phone = "El campo 'phone' es requerido";
    }
    
    if (!form.job.trim()) {
      errors.job = "El campo 'job' es requerido";
    }
    
    return errors;
};
