import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import { Repository } from 'typeorm';

import { AppDataSource } from '@shared/infra/database/datasources/app';

import User from '../entities/User';

export default class UsersRepository implements IUsersRepository {
  private ormRepository: Repository<User>;

  constructor() {
    this.ormRepository = AppDataSource.getRepository(User);
  }

  async findLast(): Promise<User | null> {
    return this.ormRepository
      .createQueryBuilder('user')
      .orderBy('created_at', 'DESC')
      .getOne();
  }

  async create(token: string): Promise<User> {
    return this.ormRepository.save({ token });
  }

  async deleteAll(): Promise<void> {
    await this.ormRepository.clear();
  }

  async deleteByToken(token: string): Promise<void> {
    await this.ormRepository.delete({ token });
  }
}
