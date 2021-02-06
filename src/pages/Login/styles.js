import styled from 'styled-components';
import BackgroundImage from '../../assets/images/login_bg.png';

export const Container = styled.div`
  background-image: url(${BackgroundImage});
  background-size: cover;
  background-repeat: no-repeat;
  height: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-position: center;
`;

export const Box = styled.div`
  background-color: #ffff;
  padding: 40px 34px 20px 34px;
  width: 368px;
  max-width: 368px;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-bottom: 2px solid #ffff;
  box-shadow: 0 -3px 38px rgb(255 255 255 / 30%), 0 8px 12px rgb(0 0 0 / 22%);

  form {
    width: 100%;
    margin: 0 auto;
    text-align: center;
  }

  .group {
    margin: 22px 0px;
  }

  .logo {
    margin-bottom: 30px;
    max-width: 179px;
  }

  button {
    margin: 20px 0px;
  }
`;

export const TextBottom = styled.p`
  color: #ffff;
  font-weight: 700;
  margin-top: 30px;
  font-size: 14px;
`;
