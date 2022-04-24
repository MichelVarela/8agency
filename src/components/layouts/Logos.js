import React from 'react';

// images
import cluster from '../../images/brands/cluster.png';
import asobanca from '../../images/brands/asobanca.png';
import ipbf from '../../images/brands/ipbf.png';
import hightelecom from '../../images/brands/hightelecom.webp';
import ebanx from '../../images/brands/ebanx.png';
import zendesk from '../../images/brands/zendesk.png';

const Logos = () => {
  return (
    <div className="content-logos">
        <img src={cluster} alt="logo-cluster" />
        <img src={asobanca} alt="logo-asobanca" />
        <img src={ipbf} alt="logo-ipbf" />
        <img src={hightelecom} alt="logo-hightelecom" />
        <img src={ebanx} alt="logo-ebanx" />
        <img src={zendesk} alt="logo-zendesk" />
    </div>
  )
}

export default Logos;