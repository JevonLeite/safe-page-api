import User from '../infra/database/entities/User';

export default interface IUsersRepository {
  findLast(): Promise<User | null>;
  create(token: string): Promise<User>;
  deleteAll(): Promise<void>;
  deleteByToken(token: string): Promise<void>;
}
