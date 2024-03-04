import 'dotenv/config';
import { DataSource } from 'typeorm';

import User from '@modules/users/infra/database/entities/User';

import { CreateTableExtensionUuid1709255125952 } from '@shared/infra/database/migrations/1709255125952-CreateTableExtensionUuid';
import { CreateTableUsers1709255158610 } from '@shared/infra/database/migrations/1709255158610-CreateTableUsers';

export const AppDataSource = new DataSource({
  type: 'postgres',
  url:
    `postgres://${String(process.env.DB_USER)}` +
    `:${String(process.env.DB_PASS)}` +
    `@${String(process.env.DB_HOST)}` +
    `:${process.env.DB_PORT}/safe_page`,
  entities: [User],
  migrations: [
    CreateTableExtensionUuid1709255125952,
    CreateTableUsers1709255158610,
  ],
  migrationsRun: true,
  synchronize: false,
  cache: true,
  logging: false,
});
