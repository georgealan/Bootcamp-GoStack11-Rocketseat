import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Repository from '../pages/Repository';

/**
 * O Switch é utilizado para rotear as rotas e exibir apenas uma de cada vez,
 * sem o Switch ao entrar em uma rota seria exibido na página o conteúdo de
 * todas as rotas, tudo de uma vez, mas com o Switch isso não
 * acontece e tudo é exibido de acordo com a respectiva rota uma de cada vez.
 */
const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    <Route path="/repository" component={Repository} />
  </Switch>
);

export default Routes;
