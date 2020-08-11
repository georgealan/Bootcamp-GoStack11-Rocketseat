import { getRepository } from 'typeorm';
// import { hash } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import { compare } from 'bcryptjs';
import User from '../models/User';

interface Request {
  email: string;
  password: string;
}

interface Response {
  user: User;
  token: string;
}

class AthenticateUserService {
  public async execute({ email, password }: Request): Promise<Response> {
    const usersRepository = getRepository(User);

    const user = await usersRepository.findOne({ where: { email } });

    if (!user) {
      throw new Error('Incorrect email/password combination.');
    }

    const passwordMatched = await compare(password, user.password);

    if (!passwordMatched) {
      throw new Error('Incorrect email/password combination.');
    }

    // Usuário autenticado
    const token = sign({}, '9b306ab04ef5e25f9fb89c998a6aedab', {
      subject: user.id,
      expiresIn: '1d',
    });

    return {
      user,
      token,
    };
  }
}

export default AthenticateUserService;
