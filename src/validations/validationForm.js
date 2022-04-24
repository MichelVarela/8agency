export const validationsForm = form => {

    let errors = {};
    let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
    
    if (!form.name.trim() || !regexName.test(form.name.trim())) {
      errors.name = true;
    } else {
      errors.name = false;
    }
    
    if (!form.surname.trim() || !regexName.test(form.surname.trim())) {
      errors.surname = true;
    } else {
      errors.surname = false;
    }
    
    if (!form.email.trim() || !regexEmail.test(form.email.trim())) {
      errors.email = true;
    } else {
      errors.email = false;
    }
    
    if (!form.country.trim() || form.country.trim() === 'Selecciona un país') {
      errors.country = true;
    } else {
      errors.country = false;
    }
    
    if (!form.phone.trim()) {
      errors.phone = true;
    } else {
      errors.phone = false;
    }
    
    if (!form.job.trim()) {
      errors.job = true;
    } else {
      errors.job = false;
    }
    
    return errors;
};


