import {
  ConflictException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { CreateSubscriberDto } from './dto/create-subscriber.dto';
import { UpdateSubscriberDto } from './dto/update-subscriber.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Subscriber } from './entities/subscriber.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SubscriberService {
  constructor(
    @InjectRepository(Subscriber)
    private subscriberRepository: Repository<Subscriber>,
  ) {}

  async create(createSubscriberDto: CreateSubscriberDto) {
    return await this.subscriberRepository.save(createSubscriberDto);
  }

  async registerNewUser(createSubscriberDto: CreateSubscriberDto) {
    const username = createSubscriberDto.username;

    const existingUser = await this.subscriberRepository.findOne({
      where: { username },
    });
    if (existingUser) {
      throw new ConflictException('username already exists');
    }
    return await this.subscriberRepository.save(createSubscriberDto);
  }

  async logIn(username: string, password: string) {
    const user = await this.subscriberRepository.findOne({
      where: { username },
    });

    if (!user || user.password !== password) {
    }
    return 'log in successfull';
  }

  async findAll() {
    return await this.subscriberRepository.find();
  }

  async findOne(id: number) {
    return await this.subscriberRepository.findOneBy({ id });
  }

  update(id: number, updateSubscriberDto: UpdateSubscriberDto) {
    return `This action updates a #${id} subscriber`;
  }

  async remove(id: number) {
    return await this.subscriberRepository.delete(id);
  }
}
