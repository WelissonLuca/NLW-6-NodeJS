import {
  Connection,
  createConnection,
  getConnectionOptions,
  ConnectionOptions,
} from 'typeorm';

async function connection(): Promise<Connection> {
  const defaultOptions = await getConnectionOptions();

  const isTest = process.env.NODE_ENV === 'test';

  const {
    PORT_DB_TEST,
    HOST_DB_TEST,
    USERNAME_DB_TEST,
    PASSWORD_DB_TEST,
    DATABASE_DB_TEST,
  } = process.env;

  const dbOptions: ConnectionOptions = isTest
    ? Object.assign(defaultOptions, {
        port: Number(PORT_DB_TEST),
        host: HOST_DB_TEST,
        username: USERNAME_DB_TEST,
        password: PASSWORD_DB_TEST,
        database: DATABASE_DB_TEST,
      })
    : defaultOptions;

  return createConnection(dbOptions);
}

export { connection };
