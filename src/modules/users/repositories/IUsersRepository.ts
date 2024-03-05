import User from '../infra/database/entities/User';

export default interface IUsersRepository {
  find(): Promise<User[]>;
  create(token: string): Promise<User>;
  deleteAll(): Promise<void>;
}
