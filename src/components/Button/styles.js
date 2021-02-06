import styled from 'styled-components';

export const Button = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  padding: 15px;
  color: ${props => (props.estilo === 'fill' ? '#ffff' : '#25ABE6')};
  background-color: ${props => (props.estilo === 'fill' ? '#47CDFF' : '#ffff')};
  border: 1px solid #47cdff;
  border-radius: 22px;
  font-weight: 700;
  font-size: 14px;
  border-bottom: 5px solid #25abe6;
  transition: all 0.1s;
  -webkit-transition: all 0.1s;
  cursor: pointer;

  :disabled {
    cursor: not-allowed;
  }
  img {
    margin-right: 10px;
  }

  :hover {
    background-color: ${props =>
      props.estilo === 'fill' ? '#6bd2f9' : '#ffff'};
  }

  :active {
    top: 1px;
  }
`;
