import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  position: relative;
  left: 0px;
  padding: 20px;
`;

export const ContainerFiltros = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  box-shadow: 0px 4px 0px #e3e3e3;
  padding: 25px;
  border-radius: 25px;
`;

export const Filtro = styled.div`
  p {
    font-weight: 600;
    font-size: 14px;
    color: #47cdff;
    padding-bottom: 5px;
  }

  .opcoes {
    border: 1px solid #e1e1e1;
    border-radius: 15px;
  }
`;

export const InputContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  img {
    position: absolute;
    right: 0px;
    pointer-events: none;
    width: 16px;
    margin-right: 12px;
  }

  input {
    width: 100%;
    padding: 10px 10px !important;
    text-transform: lowercase;
    margin: 0em !important;
    box-sizing: border-box;
    border: 1px solid #c3c3c3;
    border-radius: 10px;
    font-size: 13px;
    color: #c3c3c3;
    width: 300px;

    ::placeholder {
      color: #c3c3c3;
    }

    @media (max-width: 1282px) {
      width: 180px;
    }
  }
`;

export const ButtonOpcoes = styled.button`
  padding: 5px 30px;
  border: none;
  border-radius: 15px;
  font-weight: 700;

  &.second {
    background-color: #47cdff;
    color: #ffff;
  }

  &.first {
    background-color: #ffff;
    color: #47cdff;
  }
`;

export const ContainerLista = styled.div`
  padding: 20px 10px;

  h2 {
    font-size: 17px;
    line-height: 27px;
    color: #616161;
    padding-bottom: 5px;
    padding-top: 10px;

    &.ano {
      border-bottom: 1px solid #e1e1e1;
      margin-bottom: 20px;
    }
  }
`;

export const ContainerItens = styled.div`
  display: flex;
  align-items: center;
`;

export const Item = styled.div`
  background: #ffffff;
  border: 1px solid #e1e1e1;
  box-sizing: border-box;
  box-shadow: 0px 4px 0px #e3e3e3;
  border-radius: 10px;
  padding: 17px;
  margin: 0px 20px;

  :first-child {
    margin-left: 0px;
  }

  p {
    font-size: 17px;
  }

  img {
    width: 200px;
  }
`;
