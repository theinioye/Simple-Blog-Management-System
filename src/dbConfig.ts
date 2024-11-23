import { Post } from '@nestjs/common';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

export const pgconfig: PostgresConnectionOptions = {
  type: 'postgres',
  host: ' localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'blogtrackerdb',
  entities: [__dirname + '/**/*/{.entity.ts,entity.js}'],
  synchronize: true,
};
