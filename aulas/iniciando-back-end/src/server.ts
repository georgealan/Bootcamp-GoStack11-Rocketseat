import 'reflect-metadata';
import express, { Request, Response, NextFunction } from 'express';
import 'express-async-errors';
import routes from './routes';
import './database';
import uploadConfig from './config/upload';
import AppError from './errors/AppError';

const app = express();

app.use(express.json());

// Servindo de forma estática o upload de arquivos para poder exibir o arquivo que foi feito o upload na rota designada.
app.use('/files', express.static(uploadConfig.directory));

app.use(routes);

/* Para criar um middleware de tratativa de erro global como o GlobalExceptionHandler temos que construir o
middleware sempre abaixo das rotas, porque esse middleware será utilizado nas rotas e se colocado antes o scopo
vai estar errado. E todo middleware de tratativa de erro tem como exigência utilizar três parametros */
app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    });
  }

  return response.status(500).json({
    status: 'error',
    message: 'Internal server error',
  });
});

app.listen(3333, () => {
  console.log('🚀 Server started on port 3333');
});
