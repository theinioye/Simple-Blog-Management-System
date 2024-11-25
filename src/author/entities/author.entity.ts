import { Post } from 'src/post/entities/post.entity';
import { Subscriber } from 'src/subscriber/entities/subscriber.entity';
import {
  Column,
  Entity,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Author {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;
  @Column()
  password: string;

  @OneToMany(() => Post, (post) => post.author)
  posts: [];

  @ManyToMany(() => Subscriber, (subscriber) => subscriber.authors)
  subscribers: Subscriber[];
}
