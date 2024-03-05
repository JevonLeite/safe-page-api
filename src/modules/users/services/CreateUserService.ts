import { injectable, inject } from 'tsyringe';
import { v4 as uuidv4 } from 'uuid';

import AppError from '@shared/errors/AppError';

import User from '@modules/users/infra/database/entities/User';
import IUsersRepository from '@modules/users/repositories/IUsersRepository';

interface ICreateUserProps {
  token?: string;
}

@injectable()
export default class CreateUserService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  async execute({ token }: ICreateUserProps): Promise<User> {
    const users = await this.usersRepository.find();

    if (users.length > 0) {
      const findUser = users.find(user => user.token === token);

      if (
        findUser &&
        new Date().getTime() - findUser.created_at.getTime() < 60000
      ) {
        throw new AppError(
          'Não foi possível acessar página, pois ' +
            'está reservado por outro usuário',
          401,
        )
      }
    }

    await this.usersRepository.deleteAll();

    return this.usersRepository.create(uuidv4());
  }
}
