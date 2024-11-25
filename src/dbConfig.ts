import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';
import { Author } from './author/entities/author.entity';
import { Post } from './post/entities/post.entity';
import { Subscriber } from './subscriber/entities/subscriber.entity';

export const pgconfig: PostgresConnectionOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'blogtrackerdb',
  entities: [Subscriber, Author, Post],
  synchronize: true,
};
