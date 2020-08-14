import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import Routes from './routes';
import GlobalStyle from './styles/global';

/**
 * Troca de function para const para tipar e utilizar arow function, que aqui
 * como no caso só há um retorno podemos diminuir a verbosidade removendo as
 * chaves e parênteses.
 */
const App: React.FC = () => (
  <>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
    <GlobalStyle />
  </>
);

export default App;
