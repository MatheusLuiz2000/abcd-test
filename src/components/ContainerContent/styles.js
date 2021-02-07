import styled from 'styled-components';

export const Container = styled.div`
  margin-left: 400px;
  padding: 0px 10px;

  @media (max-width: 1140px) {
    margin-left: 0px;
    padding: 0px;
  }
`;

export const CopyRight = styled.p`
  position: absolute;
  font-size: 15px;
  color: #afafaf;
  right: 12px;
  bottom: -25px;
`;
