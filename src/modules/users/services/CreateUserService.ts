import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import User from '@modules/users/infra/database/entities/User';
import IUsersRepository from '@modules/users/repositories/IUsersRepository';

@injectable()
export default class CreateUserService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  async execute(): Promise<User> {
    const users = await this.usersRepository.find();

    if (users.length > 0) {
      throw new AppError(
        'Não foi possível acessar página, pois ' +
          'está reservado por outro usuário',
        401,
      )
    }

    return this.usersRepository.create();
  }
}
