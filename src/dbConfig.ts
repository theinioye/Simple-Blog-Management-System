import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';
import { Author } from './author/entities/author.entity';
import { Post } from './post/entities/post.entity';
import { Subscriber } from './subscriber/entities/subscriber.entity';

export const pgconfig: PostgresConnectionOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT, 10),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [Subscriber, Author, Post],
  synchronize: true,
};
