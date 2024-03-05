import { AppDataSource } from '@shared/infra/database/datasources/app';

AppDataSource.initialize()
  .then(async () => {
    console.log(
      'DATABASE: conexão ao banco postgres/safe_page realizada com sucesso .',
    );
  })
  .catch(err => {
    console.log(`DATABASE: ${err}`);
  });
