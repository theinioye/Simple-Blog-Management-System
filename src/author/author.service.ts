import { ConflictException, Injectable } from '@nestjs/common';
import { CreateAuthorDto } from './dto/create-author.dto';
import { UpdateAuthorDto } from './dto/update-author.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Author } from './entities/author.entity';
import { Repository } from 'typeorm';
import { hashstring } from 'src/subscriber/utils';

@Injectable()
export class AuthorService {
  constructor(
    @InjectRepository(Author)
    private authorRepository: Repository<Author>,
  ) {}

  async create(createAuthorDto: CreateAuthorDto): Promise<any> {
    const { name, email, password } = createAuthorDto;

    const author = this.authorRepository.findOneBy({ name });

    if (author) {
      throw new ConflictException('Author name already exists');
    }
    const hashedPassword = await hashstring(password);

    const newAuthor = {
      name,
      email,
      hashedPassword,
    };

    return await this.authorRepository.save(newAuthor);
  }

  async findAll() {
    return await this.authorRepository.find();
  }

  async findOne(id: number) {
    return await this.authorRepository.findOneBy({ id });
  }

  async update(id: number, updateAuthorDto: UpdateAuthorDto) {
    return await this.authorRepository.save({
      id,
      updateAuthorDto,
    });
  }

  async remove(id: number) {
    return await this.authorRepository.delete({ id });
  }
}
