import React, { useEffect, useState } from 'react';
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

import fireBase from '../../../config/fireBase';
import 'firebase/firestore';

import Loading from '../../../components/Loading';

export default function Listar() {
  const [data, setData] = useState('');
  const [filtroAtivo, setFiltroAtivo] = useState('nome');

  async function buscaAlunos(filtro = null) {
    // setData('');
    const db = fireBase.firestore();

    const list = {
      pre: [],
      primeiroAno: [],
      segundoAno: [],
      terceiroAno: [],
    };

    console.log(filtro);

    const busca = !filtro
      ? await db.collection('alunos').get()
      : await db
          .collection('alunos')
          .orderBy(filtroAtivo)
          .startAt(filtro)
          .endAt(`${filtro}\uf8ff`)
          .get();

    busca.forEach(function(doc) {
      switch (doc.data().anoEscola) {
        case 'pre':
          list.pre.push(doc.data());
          break;
        case '1':
          list.primeiroAno.push(doc.data());
          break;
        case '2':
          list.segundoAno.push(doc.data());
          break;
        case '3':
          list.terceiroAno.push(doc.data());
          break;
        default:
          break;
      }
    });

    setTimeout(() => {
      return setData(list);
    }, 1500);
  }

  useEffect(() => {
    buscaAlunos();
  }, []);

  return (
    <ContainerContent>
      {data ? (
        <Container>
          <ContainerFiltros>
            <InputContainer>
              <img src={Search} alt="Buscar" />
              <input
                type="text"
                placeholder="Pesquisar"
                onChange={e => {
                  if (e.target.value.length >= 3) {
                    buscaAlunos(e.target.value, filtroAtivo);
                  }
                }}
              />
            </InputContainer>
            <Filtro>
              <p>Filtrar por</p>
              <div className="opcoes">
                <ButtonOpcoes
                  id="nome"
                  className={filtroAtivo === 'nome' ? 'second' : 'first'}
                  onClick={() => {
                    setFiltroAtivo('nome');
                  }}
                >
                  Nome
                </ButtonOpcoes>
                <ButtonOpcoes
                  id="ano"
                  className={filtroAtivo === 'anoEscola' ? 'second' : 'first'}
                  onClick={() => {
                    setFiltroAtivo('anoEscola');
                  }}
                >
                  Ano
                </ButtonOpcoes>
              </div>
            </Filtro>
            <Link to="/alunos/adicionar">
              <Button estilo="fill" icon={IconPlus}>
                Adicionar novo aluno
              </Button>
            </Link>
          </ContainerFiltros>
          {data.pre.length > 0 ? (
            <ContainerLista>
              <h2 className="ano">Pre</h2>
              <ContainerItens>
                {data.pre.map(item => {
                  return (
                    <Item>
                      <img src={item.foto} alt="User 1" />
                      <h2>{item.nome}</h2>
                      <p>{item.escola}</p>
                    </Item>
                  );
                })}
              </ContainerItens>
            </ContainerLista>
          ) : (
            ''
          )}
          {data.primeiroAno.length > 0 ? (
            <ContainerLista>
              <h2 className="ano">1 ano</h2>
              <ContainerItens>
                {data.primeiroAno.map(item => {
                  return (
                    <Item>
                      <img src={item.foto} alt="User 1" />
                      <h2>{item.nome}</h2>
                      <p>{item.escola}</p>
                    </Item>
                  );
                })}
              </ContainerItens>
            </ContainerLista>
          ) : (
            ''
          )}
          {data.segundoAno.length > 0 ? (
            <ContainerLista>
              <h2 className="ano">2 ano</h2>
              <ContainerItens>
                {data.segundoAno.map(item => {
                  return (
                    <Item>
                      <img src={item.foto} alt="User 1" />
                      <h2>{item.nome}</h2>
                      <p>{item.escola}</p>
                    </Item>
                  );
                })}
              </ContainerItens>
            </ContainerLista>
          ) : (
            ''
          )}
          {data.terceiroAno.length > 0 ? (
            <ContainerLista>
              <h2 className="ano">3 ano</h2>
              <ContainerItens>
                {data.terceiroAno.map(item => {
                  return (
                    <Item>
                      <img src={item.foto} alt="User 1" />
                      <h2>{item.nome}</h2>
                      <p>{item.escola}</p>
                    </Item>
                  );
                })}
              </ContainerItens>
            </ContainerLista>
          ) : (
            ''
          )}
          <p className="copyright">
            © 2020 EduEdu, todos os direitos reservados
          </p>
        </Container>
      ) : (
        <Loading />
      )}
    </ContainerContent>
  );
}
