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
      const users = await this.usersRepository.find();

      const findUser = users.find(user => user.token === token);

      if (findUser) {
        await this.usersRepository.deleteAll();
      }
    }
  }
}
