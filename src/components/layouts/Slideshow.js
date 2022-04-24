import React from 'react';

// images
import cluster from '../../images/cluster.png';
import asobanca from '../../images/asobanca.png';
import ipbf from '../../images/ipbf.png';
import hightelecom from '../../images/hightelecom.webp';
import ebanx from '../../images/ebanx.png';
import zendesk from '../../images/zendesk.png';

const Slideshow = () => {

  return (
    <div className='slider'>
        <div className="slide-track">
            <div className="slide"><img src={cluster} alt="logo-cluster" /></div>
            <div className="slide"><img src={asobanca} alt="logo-asobanca" /></div>
            <div className="slide"><img src={ipbf} alt="logo-ipbf" /></div>
            <div className="slide"><img src={hightelecom} alt="logo-hightelecom" /></div>
            <div className="slide"><img src={ebanx} alt="logo-ebanx" /></div>
            <div className="slide"><img src={zendesk} alt="logo-zendesk" /></div>
            <div className="slide"><img src={cluster} alt="logo-cluster" /></div>
            <div className="slide"><img src={asobanca} alt="logo-asobanca" /></div>
            <div className="slide"><img src={ipbf} alt="logo-ipbf" /></div>
            <div className="slide"><img src={hightelecom} alt="logo-hightelecom" /></div>
            <div className="slide"><img src={ebanx} alt="logo-ebanx" /></div>
            <div className="slide"><img src={zendesk} alt="logo-zendesk" /></div>
            <div className="slide"><img src={cluster} alt="logo-cluster" /></div>
            <div className="slide"><img src={asobanca} alt="logo-asobanca" /></div>
        </div>
    </div>
  )
}

export default Slideshow;