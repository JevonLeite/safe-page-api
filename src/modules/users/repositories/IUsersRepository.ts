import User from '../infra/database/entities/User';

export default interface IUsersRepository {
  find(): Promise<User[]>;
  create(): Promise<User>;
  delete(): Promise<void>;
}
