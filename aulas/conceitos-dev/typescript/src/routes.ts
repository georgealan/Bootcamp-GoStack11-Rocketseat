import { Request, Response } from 'express';
import createUser from './services/CreateUser';

export function helloWorld(request: Request, response: Response) {

  const user = createUser({
    email: 'george@gmail.com',
    password: '1234',
  });

  return response.json({ message: 'Hello Wold' });
}