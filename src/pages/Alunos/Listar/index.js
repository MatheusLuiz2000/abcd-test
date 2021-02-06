import React from 'react';
import { Link } from 'react-router-dom';
import ContainerContent from '../../../components/ContainerContent';
import {
  Container,
  ContainerFiltros,
  ButtonOpcoes,
  InputContainer,
  Filtro,
  ContainerLista,
  ContainerItens,
  Item,
} from './styles';
import Button from '../../../components/Button';

// Assets
import IconPlus from '../../../assets/icons/icon_plus.svg';
import Search from '../../../assets/icons/search.svg';
import User1 from '../../../assets/images/juju.png';

export default function Listar() {
  return (
    <ContainerContent>
      <Container>
        <ContainerFiltros>
          <InputContainer>
            <img src={Search} alt="Buscar" />
            <input type="text" placeholder="Pesquisar" />
          </InputContainer>
          <Filtro>
            <p>Filtrar por</p>
            <div className="opcoes">
              <ButtonOpcoes className="first">Nome</ButtonOpcoes>
              <ButtonOpcoes className="second">Ano</ButtonOpcoes>
            </div>
          </Filtro>
          <Link to="/alunos/adicionar">
            <Button estilo="fill" icon={IconPlus}>
              Adicionar novo aluno
            </Button>
          </Link>
        </ContainerFiltros>
        <ContainerLista>
          <h2 className="ano">1º ano</h2>
          <ContainerItens>
            <Item>
              <img src={User1} alt="User 1" />
              <h2>Ana luiza</h2>
              <p>1º ano</p>
            </Item>
            <Item>
              <img src={User1} alt="User 1" />
              <h2>Ana luiza</h2>
              <p>1º ano</p>
            </Item>
            <Item>
              <img src={User1} alt="User 1" />
              <h2>Ana luiza</h2>
              <p>1º ano</p>
            </Item>
          </ContainerItens>
        </ContainerLista>
        <ContainerLista>
          <h2 className="ano">2º ano</h2>
          <ContainerItens>
            <Item>
              <img src={User1} alt="User 1" />
              <h2>Ana luiza</h2>
              <p>1º ano</p>
            </Item>
            <Item>
              <img src={User1} alt="User 1" />
              <h2>Ana luiza</h2>
              <p>1º ano</p>
            </Item>
            <Item>
              <img src={User1} alt="User 1" />
              <h2>Ana luiza</h2>
              <p>1º ano</p>
            </Item>
          </ContainerItens>
        </ContainerLista>
      </Container>
    </ContainerContent>
  );
}
