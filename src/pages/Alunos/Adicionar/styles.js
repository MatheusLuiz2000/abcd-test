import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px;
  text-align: center;

  p {
    font-size: 14px;
    color: #c4c4c4;
  }
`;

export const Box = styled.div`
  width: 600px;
  max-width: 600px;
  background: #ffffff;
  border: 1px solid #e1e1e1;
  box-sizing: border-box;
  box-shadow: 0px 4px 0px #e3e3e3;
  border-radius: 25px;
  padding: 32px;

  .avatar-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    img {
      width: 130px;
      border-radius: 15px;
      border-bottom-left-radius: 0px;
      border-bottom-right-radius: 0px;
    }

    button {
      width: auto;
      padding: 12px 50px;
      color: #47cdff;
      margin-bottom: 35px;
    }
  }

  .group {
    margin-bottom: 30px;
  }
`;

export const ContainerButtonSubmit = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  button {
    width: 350px;
    max-width: 350px;
    justify-content: center;
    font-size: 18px;
    margin-top: 24px;
  }
`;

export const Aceite = styled.div`
  display: flex;
  text-align: left;

  input {
    padding: 0;
    height: initial;
    width: initial;
    margin-bottom: 0;
    display: none;
    cursor: pointer;
  }

  .form-group label {
    position: relative;
    cursor: pointer;
  }

  .form-group label:before {
    content: '';
    -webkit-appearance: none;
    background-color: transparent;
    border: 2px solid #47cdff;
    border-radius: 4px;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05),
      inset 0px -15px 10px -12px rgba(0, 0, 0, 0.05);
    padding: 7px;
    display: inline-block;
    position: relative;
    vertical-align: middle;
    cursor: pointer;
    margin-right: 5px;
  }

  .form-group input:checked + label:after {
    content: '';
    display: block;
    position: absolute;
    top: 2px;
    left: 7px;
    width: 5px;
    height: 12px;
    border: solid #47cdff;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
  }
`;

export const AnoEscolar = styled.div`
  display: flex;
  align-items: center;
  padding: 30px 0px;

  .input-range {
    margin: 25px 0px 50px 0px;
  }

  .input-range__track {
    background: #e3e3e3;
    height: 0.6rem;
  }

  .input-range__label.input-range__label--min,
  .input-range__label.input-range__label--max {
    display: none;
  }

  .input-range__slider,
  .input-range__track--active {
    background: #47cdff;
    border: 1px solid #47cdff;
  }

  h3,
  span {
    font-size: 20px;
    text-align: center;
    color: #47cdff;
    font-weight: 700;
  }

  span {
    font-size: 15px;
  }

  img {
    width: 110px;
  }

  .escolha {
    padding-left: 30px;
    p {
      text-align: left;
      padding-bottom: 10px;
    }
  }
`;

export const ContainerModal = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 69%;
  margin: 0 auto;
  position: absolute;
  right: 100px;
  background-color: #ffff;
  box-shadow: 0 14px 28px rgb(255 255 255 / 25%), 0 10px 10px rgb(8 8 8 / 22%);

  .title {
    width: 100%;
    text-align: center;
    padding: 30px 0px;
    color: #47cdff;
    font-weight: 700;
    font-size: 22px;
  }

  .avatar {
    text-align: center;
    margin: 15px 30px;

    button {
      margin: 20px auto;
    }
  }
`;
