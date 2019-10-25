/**
 * Arquivo de rotas da aplicação
 */
import { Router } from 'express';
// Utilizando apenas o Router do express.
const routes = new Router();

routes.get('/', (req, res) => res.json({ message: 'Hello React native' }));

// Exportando o routes, permitindo ser usado fora em outros arquivos.
export default routes;
