import React from 'react';

// logos
import twitter from '../images/logos-redes/twitter.svg';
import facebook from '../images/logos-redes/facebook.svg';
import linkedin from '../images/logos-redes/linkedin.svg';
import youtube from '../images/logos-redes/youtube.svg';
import instagram from '../images/logos-redes/instagram.svg';
import snapchat from '../images/logos-redes/snapchat.svg';

const Footer = () => {
  return (
    <footer>
      <div className="content-footer">
        <span>© 2020</span>
        
        <section>
          <div className="content-logo-redes">
            <img src={twitter} alt='logo-twitter'/>
          </div>
          <div className="content-logo-redes">
            <img src={facebook} alt='logo-facebook'/>
          </div>
          <div className="content-logo-redes">
            <img src={linkedin} alt='logo-linkedin'/>
          </div>
          <div className="content-logo-redes">
            <img src={youtube} alt='logo-youtube'/>
          </div>
          <div className="content-logo-redes">
            <img src={instagram} alt='logo-instagram'/>
          </div>
          <div className="content-logo-redes">
            <img src={snapchat} alt='logo-snapchat'/>
          </div>
        </section>
      </div>
    </footer>
  )
}

export default Footer;