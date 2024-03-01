import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateUserService from '@modules/users/services/CreateUserService';
import DeleteUserService from '@modules/users/services/DeleteUserService';

export default class UsersController {
  async create(_: Request, response: Response): Promise<Response> {
    const createUser = container.resolve(CreateUserService);

    const user = await createUser.execute();

    return response.json(user);
  }

  async delete(_: Request, response: Response): Promise<Response> {
    const deleteUser = container.resolve(DeleteUserService);

    await deleteUser.execute();

    return response.json();
  }
}
