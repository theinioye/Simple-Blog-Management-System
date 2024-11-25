import { Author } from 'src/author/entities/author.entity';
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Subscriber {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column()
  email: string;

  @ManyToMany(() => Author, (author) => author.subscribers)
  authors: Author[];
}
