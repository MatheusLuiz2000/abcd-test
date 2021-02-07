import React from 'react';
import Lottie from 'react-lottie';

import animationData from '../../assets/json/lottie.json';

import { ContainerLoading } from './styles';

export default function Loading() {
  const defaultOptions = {
    renderer: 'svg',
    loop: true,
    autoplay: true,
    animationData,
  };

  return (
    <ContainerLoading>
      <Lottie options={defaultOptions} isStopped={false} isPaused={false} />
      <h1>Carregando ...</h1>
    </ContainerLoading>
  );
}
