import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import { Repository } from 'typeorm';

import { AppDataSource } from '@shared/infra/database/datasources/app';

import User from '../entities/User';

export default class UsersRepository implements IUsersRepository {
  private ormRepository: Repository<User>;

  constructor() {
    this.ormRepository = AppDataSource.getRepository(User);
  }

  async find(): Promise<User[]> {
    return this.ormRepository
      .createQueryBuilder('user')
      .orderBy('user.created_at', 'ASC')
      .getMany();
  }

  async create(token: string): Promise<User> {
    return this.ormRepository.save({ token });
  }

  async deleteAll(): Promise<void> {
    await this.ormRepository.clear();
  }
}
