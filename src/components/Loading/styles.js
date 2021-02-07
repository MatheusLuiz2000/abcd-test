import styled from 'styled-components';

export const ContainerLoading = styled.div`
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-2%, -50%);

  h1 {
    color: #47cdff;
    font-size: 40px;
  }

  div {
    text-align: center;
    svg {
      width: 400px !important;
    }
  }
`;
