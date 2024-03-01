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
    return this.ormRepository.createQueryBuilder('user').getMany();
  }

  async create(): Promise<User> {
    return this.ormRepository.create();
  }

  async delete(): Promise<void> {
    await this.ormRepository.clear();
  }
}
