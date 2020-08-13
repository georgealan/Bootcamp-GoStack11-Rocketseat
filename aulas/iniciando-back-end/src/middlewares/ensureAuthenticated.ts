import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';
import authConfig from '../config/auth';
import AppError from '../errors/AppError';

/**
 * Aqui estamos utilizando um middleware para fazer a validação do token do usuario que é enviado no header da
 * requisição, um middleware possui como terceiro parâmetro o next que é responsável por fazer a aplicação continuar
 * a ser utilizada.
 * @param request
 * @param response
 * @param next
 */

/* Utilizando uma interface para poder setar valores fixos para as próximas requisições das rotas depois que possar por
esta.
*/
interface TokenPayload {
  iat: number;
  exp: number;
  sub: string;
}

export default function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction,
): void {
  // Validação do token JWT
  // Captura o token JWT do header da requisição.
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new AppError('JWT token is missing', 401);
  }

  // Desestruturação para capturar o token
  const [, token] = authHeader.split(' ');

  // Utilizando o método verify do jsonwebtoken para validar o token
  try {
    const decoded = verify(token, authConfig.jwt.secret);

    // Forçando tipagem de variável
    const { sub } = decoded as TokenPayload;

    request.user = {
      id: sub,
    };

    return next();
  } catch {
    throw new AppError('Invalid JWT Token', 401);
  }
}
