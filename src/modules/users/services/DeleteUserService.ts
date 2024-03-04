import { injectable, inject } from 'tsyringe';

import IUsersRepository from '@modules/users/repositories/IUsersRepository';

interface IDeleteUserProps {
  token?: string;
}

@injectable()
export default class DeleteUserService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  async execute({ token }: IDeleteUserProps): Promise<void> {
    if (token) {
      await this.usersRepository.deleteByToken(token);
    }
  }
}
