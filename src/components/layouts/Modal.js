import React, { useState, useEffect } from 'react';
import { MdClose } from 'react-icons/md';

const Modal = () => {

    const [close, setClose] = useState(false);

    useEffect(() => {

      if (close === true) {
        setTimeout(() => {
          setClose(false);
        }, 3000);
      }
      
    }, [close]);

  return (
    <div className={ close ? 'modal close-modal' : 'modal' }>
        <div className="content-modal">
            <div className="button-close" onClick={ () => setClose(true) }><MdClose/></div>
            <h3>Gracias por tu interés.</h3>
            <h4>Nos pondremos en contacto con usted en breve mediante el correo electrónico que ingreso en el formulario, no olvide revisar su casilla de spam</h4>
        </div>
    </div>
  )
}

export default Modal