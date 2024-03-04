import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateUserService from '@modules/users/services/CreateUserService';
import DeleteUserService from '@modules/users/services/DeleteUserService';

export default class UsersController {
  async create(request: Request, response: Response): Promise<Response> {
    const { token } = request.body;

    const createUser = container.resolve(CreateUserService);

    const user = await createUser.execute({ token });

    return response.json(user);
  }

  async delete(request: Request, response: Response): Promise<Response> {
    const { token } = request.params;

    const deleteUser = container.resolve(DeleteUserService);

    await deleteUser.execute({ token });

    return response.json();
  }
}
