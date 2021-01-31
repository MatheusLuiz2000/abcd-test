import { createGlobalStyle } from 'styled-components';

import 'react-toastify/dist/ReactToastify.css';
import '../assets/css/hover.min.css';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600;700&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
  }

  body {
    background: #111;
  }

  a {
    color: #ffff;
    text-decoration: none;
  }

  .main {
    position: absolute;
    top: 45%;
    left: 50%;
    transform: translate(-50%,-50%);
  }

  .title {
    font-size: 35px;
    color: #fff;
    text-align: center;
    font-weight: 600;
    letter-spacing: 1px;
    margin-top: 60px;

    :first-letter{
      color: #ec0303;
    }
  }

  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 40px;

    li {
      list-style: none;
      padding: 10px;
      cursor: pointer;

      &.selected a {
        background-color: #f03535;
      }

      a {
        padding: 5px 10px;
        border: 1px solid #f03535;
        border-radius: 5px;
      }
    }
  }


  *:focus {
    outline: 0;
  }
  
  table {
    margin-top: 40px;
    width: 100%;
  }

  tr > th{
    padding: 8px 14px;
    background: rgba(255,255,255,0.2);
    color: #fff;
    font-size: 18px;
    font-weight: 500;
  }
  tr > td{
    padding: 12px 10px;
    color: #fff;
    font-weight: 400;
  }
  tr{
    transition: 230ms ease-in;
    border-bottom: 1px solid #fff;
    will-change: transform,background,cursor;
  }
  tr:not(:first-child):hover{
    cursor: pointer;
    background: rgba(255,255,255,0.2);
    transform: scale(1.1);
  }
  thead tr {
    background-color: #ec0303;
  }
`;
