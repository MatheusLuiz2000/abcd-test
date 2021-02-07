import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Images
import LogoEdu from '../../assets/images/logo.png';

import { Container } from './styles';

import IconPerfil from '../../assets/icons/icon_face.png';
import IconAjuda from '../../assets/icons/icon_help.png';
import IconAtividadesDigitais from '../../assets/icons/icon_test.png';
import IconPortugues from '../../assets/icons/icon_doc.png';
import IconConfiguracao from '../../assets/icons/icon_settings.png';

import Close from '../../assets/images/close.svg';

export default function LeftMenu() {
  const [active, setActive] = useState('');
  return (
    <Container>
      <img src={LogoEdu} alt="Logo" className="logo" />
      <div className="icon-menu">
        <button
          type="button"
          onClick={() => setActive('active pt-page-moveFromLeft')}
        >
          <svg
            className="ham hamRotate180 ham5"
            viewBox="0 0 100 100"
            width="50"
          >
            <path
              className="line top"
              d="m 30,33 h 40 c 0,0 8.5,-0.68551 8.5,10.375 0,8.292653 -6.122707,9.002293 -8.5,6.625 l -11.071429,-11.071429"
            />
            <path className="line middle" d="m 70,50 h -40" />
            <path
              className="line bottom"
              d="m 30,67 h 40 c 0,0 8.5,0.68551 8.5,-10.375 0,-8.292653 -6.122707,-9.002293 -8.5,-6.625 l -11.071429,11.071429"
            />
          </svg>
        </button>
        <h4>Menu</h4>
      </div>
      <ul className={active}>
        <div className="close">
          <button
            type="button"
            onClick={() => {
              setActive('active pt-page-moveToRight');
            }}
          >
            <img src={Close} alt="Close" />
          </button>
        </div>
        <Link to="/alunos">
          <li className="active">
            <img src={IconPerfil} alt="Icon Perfil" />
            <p>Perfil dos Alunos</p>
          </li>
        </Link>
        <li>
          <img src={IconPortugues} alt="Icon Prova de Português" />
          <p>Prova de Português</p>
        </li>
        <li>
          <img src={IconAtividadesDigitais} alt="Icon Atividades Digitais" />
          <p>Atividades Digitais</p>
        </li>
        <li>
          <img src={IconAjuda} alt="Icon Ajuda" />
          <p>Ajuda</p>
        </li>
        <li>
          <img src={IconConfiguracao} alt="Icon Configurações" />
          <p>Configurações</p>
        </li>
      </ul>
    </Container>
  );
}
