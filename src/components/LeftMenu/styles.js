import styled from 'styled-components';

export const Container = styled.div`
  width: 400px;
  background-color: #ffffff;
  box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.25);
  height: 100%;
  text-align: center;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  overflow-x: hidden;
  padding: 30px 0px;

  .close {
    display: none;
    width: 30px;
    margin: 0 auto;

    button {
      background-color: transparent;
      border: none;
    }

    img {
      width: 40px;
    }
  }

  .icon-menu {
    background-color: #d5e1ef;
    border-radius: 50%;
    position: relative;
    bottom: 5px;

    display: none;

    button {
      border: none;
      border-radius: 50px;
    }
  }
  .icon-menu h4 {
    font-weight: 600;
    color: #5b9eec;
    text-align: center;
    font-size: 12px;
    margin-top: 3px;
    position: absolute;
    left: 7px;
  }

  @media (max-width: 1140px) {
    position: static;
    width: 100%;
    max-width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 40px;

    .icon-menu {
      display: block;
    }

    .logo {
      width: 227px;
      padding: 60px 0px;
    }

    .menu {
      display: block;
    }

    .logo {
      width: 150px;
    }

    ul {
      display: none;
    }
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

  ul.active {
    display: block;
    height: 100%;
    width: 100%;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    background-color: #0081c8;
    overflow-x: hidden;
    transition: 0.5s;
    padding-top: 60px;
    z-index: 999;

    .close {
      display: block;
    }
  }
`;
