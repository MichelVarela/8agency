import React from 'react';

// components
import Form from '../components/layouts/Form';
import Logos from '../components/layouts/Logos';
import Card from '../components/layouts/Card';
import Slideshow from '../components/layouts/Slideshow';

const Home = () => {

  const employed = [
    {
      id: 1,
      name: 'José Perez',
      category: 'Presidente'
    },
    {
      id: 2,
      name: 'José Perez',
      category: 'Customer Service Senior Manager'
    },
    {
      id: 3,
      name: 'José Perez',
      category: 'Senior Customer Success Consultant'
    },
    {
      id: 4,
      name: 'José Perez',
      category: 'Gerente de Consultoría de Soluciones'
    },
  ];

  return (
    <main className='home'>
      <Slideshow/>
      <section>
        <p>Te invitan este webinar, donde trataremos la temática de cómo humanizar la experiencia del cliente de Banca y Seguros en el nuevo entorno digital.</p>
        <p>Además podremos conocer las estrategias que aplicó LOREM para generar una experiencia memorable para sus clientes, mientras se convertía en el gran Unicornio de LATAM.</p>
        <p>Escucha de primera mano la voz de nuestros especialistas:</p>

        <div className="cards">
          {employed.map(el => <Card key={el.id} name={el.name} category={el.category}/>)}
        </div>

        <p>Participa e inspírate para innovar y mejorar la interacción entre clientes y marcas con historias de éxito de empresas del ámbito financiero en América Latina.</p>
        <p>¡Te esperamos!</p>
      </section>
      <Logos/>
      <div className="content-grid-form"><Form/></div>
    </main>
  )
}

export default Home;