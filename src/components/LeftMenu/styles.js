import styled from 'styled-components';

export const Container = styled.div`
  width: 400px;
  max-width: 400px;
  background-color: #ffffff;
  box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.25);
  height: 100%;
  text-align: center;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  overflow-x: hidden;

  .logo {
    width: 227px;
    padding: 60px 0px;
  }

  ul {
    li {
      display: flex;
      align-items: center;
      width: 100%;
      padding: 15px 40px;
      margin: 30px 0px;
      cursor: pointer;

      p {
        color: #cacaca;
        font-weight: 700;
      }

      &.active,
      &:hover {
        background-color: #47cdff;

        p {
          color: #ffffff;
        }
      }

      img {
        width: 38px;
        margin-right: 15px;
      }
    }
  }
`;
