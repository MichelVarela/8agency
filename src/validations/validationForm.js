export const validationsForm = form => {

    let errors = {};
    let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
    
    if (!form.name.trim() || !regexName.test(form.name.trim())) {
      errors.name = true;
    } 
    
    if (!form.surname.trim() || !regexName.test(form.surname.trim())) {
      errors.surname = true;
    }
    
    if (!form.email.trim() || !regexEmail.test(form.email.trim())) {
      errors.email = true;
    } 
    
    if (!form.country.trim()) {
      errors.country = true;
    }
    
    if (!form.phone.trim()) {
      errors.phone = true;
    }
    
    if (!form.job.trim()) {
      errors.job = true;
    }
    
    return errors;
};


