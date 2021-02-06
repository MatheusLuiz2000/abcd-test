import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';
import Login from '../pages/Login';
import AdicionarAluno from '../pages/alunos/adicionar';
import ListarAlunos from '../pages/alunos/listar';

export default function Routes() {
  return (
    <>
      <CopyRight />
      <Switch>
        <Route path="/login" exact component={Login} />
        <Route path="/alunos/" exact component={ListarAlunos} />
        <Route path="/alunos/adicionar" component={AdicionarAluno} />
      </Switch>
    </>
  );
}
