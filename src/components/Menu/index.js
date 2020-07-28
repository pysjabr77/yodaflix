import React from 'react';
import Logo from '../../assets/img/logo.png';
/* import ButtonLink from './components/ButtonLink'; */
import Button from '../Button';

import './menu.css'

function Menu() {
  return (
    <nav className="Menu">
      <a href="/">
        <img src={Logo} alt="YodaFlix logo" className="Logo" />
      </a>

      {/* <ButtonLink href="/" className="ButtonLink">
        Novo Vídeo
      </ButtonLink> */}

      <Button as="a" href="/" className="ButtonLink">
        Novo Vídeo
      </Button>
    </nav>
  );
}

export default Menu;