import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';
import Login from '../pages/Login';
import AdicionarAluno from '../pages/Alunos/Adicionar';
import ListarAlunos from '../pages/Alunos/Listar';
import AuthProvider from '../config/Auth';

export default function Routes() {
  return (
    <AuthProvider>
      <Switch>
        <Route path="/login" exact component={Login} />
        <Route path="/alunos/" exact isPrivate component={ListarAlunos} />
        <Route path="/alunos/adicionar" component={AdicionarAluno} />
      </Switch>
    </AuthProvider>
  );
}
