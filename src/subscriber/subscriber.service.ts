import {
  ConflictException,
  Injectable,
  // UnauthorizedException,
} from '@nestjs/common';
import { CreateSubscriberDto } from './dto/create-subscriber.dto';
// import { UpdateSubscriberDto } from './dto/update-subscriber.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Subscriber } from './entities/subscriber.entity';
import { Repository } from 'typeorm';
import { Public } from 'src/SkipAuth';
import { hashstring } from './utils';

@Injectable()
export class SubscriberService {
  constructor(
    @InjectRepository(Subscriber)
    private subscriberRepository: Repository<Subscriber>,
  ) {}

  async create(createSubscriberDto: CreateSubscriberDto) {
    return await this.subscriberRepository.save(createSubscriberDto);
  }

  // async make(username: string, password: string): Promise<Subscriber> {
  //   const user = new Subscriber();
  //   user.username = username;
  //   user.password = password;

  //   return this.subscriberRepository.save(user);
  // }

  async registerNewUser(
    createSubscriberDto: CreateSubscriberDto,
  ): Promise<any> {
    const { username, email, password } = createSubscriberDto;

    const existingUser = await this.subscriberRepository.findOne({
      where: { username },
    });
    if (existingUser) {
      throw new ConflictException('username already exists');
    }
    const hashedPassword = await hashstring(password);

    const newUser = {
      username,
      email,
      password: hashedPassword,
    };
    return await this.subscriberRepository.save(newUser);
  }

  // async logIn(username: string, password: string) {
  //   const user = await this.subscriberRepository.findOne({
  //     where: { username },
  //   });

  //   const isMatch = await comparehash(password, user.password);

  //   if (!user || !isMatch) {
  //     throw new UnauthorizedException('incorrect credentials');
  //   }
  //   return user;
  // }

  async findAll() {
    return await this.subscriberRepository.find();
  }

  async findByUsername(username: string) {
    return this.subscriberRepository.findOne({
      where: { username },
    });
  }

  @Public()
  async findOne(id: number) {
    return await this.subscriberRepository.findOneBy({ id });
  }

  // update(id: number, updateSubscriberDto: UpdateSubscriberDto) {
  //   return `This action updates a #${id} subscriber`;
  // }

  async remove(id: number) {
    return await this.subscriberRepository.delete(id);
  }
}
