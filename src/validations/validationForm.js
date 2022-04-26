export const validationsForm = form => {

    let errors = {};
    let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    let regexEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    let regexPhone = /^[-+*/()\[\].\d]*$/;
    
    if (!form.name.trim()) {
      errors.name = "Campo obligatorio";
    } else if (!regexName.test(form.name.trim())) {
      errors.name = "Solo se acepta letras minusculas y mayusculas";
    } else {
      errors.name = false;
    }
    
    if (!form.surname.trim()) {
      errors.surname = "Campo obligatorio";
    } else if (!regexName.test(form.surname.trim())) {
      errors.surname = "Solo se acepta letras minusculas y mayusculas";
    } else {
      errors.surname = false;
    }
    
    if (!form.email.trim()) {
      errors.email = "Campo obligatorio";
    } else if (!regexEmail.test(form.email.trim())) {
      errors.email = "Debe ingresar un email valido";
    } else {
      errors.email = false;
    }
    
    if (!form.country.trim() || form.country.trim() === 'Selecciona un país') {
      errors.country = 'Por favor seleccione un país';
    } else {
      errors.country = false;
    }
    
    if (!form.phone.trim()) {
      errors.phone = "Campo obligatorio";
    } else if (!regexPhone.test(form.phone.trim())) {
      errors.phone = "Debe ingresar un número telefonico valido";
    } else {
      errors.phone = false;
    }
    
    if (!form.job.trim()) {
      errors.job = "Campo obligatorio";
    } else if (!regexName.test(form.job.trim())) {
      errors.job = "Solo se acepta letras minusculas y mayusculas";
    } else {
      errors.job = false;
    }
    
    return errors;
};


