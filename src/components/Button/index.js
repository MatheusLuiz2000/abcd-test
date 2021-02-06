import React from 'react';

import { Button } from './styles';

export default function ButtonComponent(props) {
  const { children, estilo, ...rest } = props;

  return (
    <Button estilo={estilo} {...rest}>
      {children}
    </Button>
  );
}
