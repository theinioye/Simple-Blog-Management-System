import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';
import { Author } from './author/entities/author.entity';
import { Post } from './post/entities/post.entity';
import { Subscriber } from './subscriber/entities/subscriber.entity';

export const pgconfig: PostgresConnectionOptions = {
  type: 'postgres',
  port: parseInt(process.env.DB_PORT, 10),
  url: process.env.DATABASE_URL,
  entities: [Subscriber, Author, Post],
  synchronize: true,
};
