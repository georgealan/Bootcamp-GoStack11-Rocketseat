/**
 * Configuração do servidor da aplicação.
 *
 * A utilização do import só foi possível devido a instalação da dependência do
 * sucrase no projeto.
 */

import express from 'express';
// import do arquivo de rotas para ser usado nesta classe.
import routes from './routes';

/**
 * Esta Classe contém os construtores, middlewares e routes que são responsáveis
 * pelo inicio da aplicação.
 */
class App {
  // Construtor que é chamado quando iniciamos a aplicação.
  constructor() {
    // Atribuição do servidor do express.
    this.server = express();

    // Instancia da função dos middlewares.
    this.middlewares();

    // Instancia da função das rotas.
    this.routes();
  }

  // Função de middlewares.
  middlewares() {
    // Possibilita o uso de responses em formato JSON em toda a aplicação.
    this.server.use(express.json());
  }

  // Função de rotas,
  routes() {
    // Middleware que permite o uso das rotas em toda a aplicação.
    this.server.use(routes);
  }
}

/**
 * Criando uma instância desta classe para ela ser utilizada fora deste aquivo
 * Instanciamos diretamente o server pois somente ele faz sentido exportar.
 */
export default new App().server;
