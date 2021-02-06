import React from 'react';

// Images
import LogoEdu from '../../assets/images/logo.png';

import { Container } from './styles';

import IconPerfil from '../../assets/icons/icon_face.png';
import IconAjuda from '../../assets/icons/icon_help.png';
import IconAtividadesDigitais from '../../assets/icons/icon_test.png';
import IconPortugues from '../../assets/icons/icon_doc.png';
import IconConfiguracao from '../../assets/icons/icon_settings.png';

export default function LeftMenu() {
  return (
    <Container>
      <img src={LogoEdu} alt="Logo" className="logo" />
      <ul>
        <li className="active">
          <img src={IconPerfil} alt="Icon Perfil" />
          <p>Perfil dos Alunos</p>
        </li>
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
