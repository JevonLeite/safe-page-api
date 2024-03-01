import 'dotenv/config';
import { DataSource } from 'typeorm';

import User from '@modules/users/infra/database/entities/User';

import { CreateTableExtensionUuid1709255125952 } from '../migrations/1709255125952-CreateTableExtensionUuid';
import { CreateTableUsers1709255158610 } from '../migrations/1709255158610-CreateTableUsers';

export const AppDataSource = new DataSource({
  type: 'postgres',
  url: process.env.APP_DB,
  entities: [User],
  migrations: [
    CreateTableExtensionUuid1709255125952,
    CreateTableUsers1709255158610,
  ],
  synchronize: false,
  cache: true,
  logging: false,
});
