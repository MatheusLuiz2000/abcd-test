import React from 'react';

import { Button } from './styles';

export default function ButtonComponent(props) {
  const { children, estilo, icon, ...rest } = props;

  return (
    <Button estilo={estilo} {...rest}>
      {icon ? <img src={icon} alt="Icon" /> : ''}
      {children}
    </Button>
  );
}
