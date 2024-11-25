import { Module } from '@nestjs/common';
import { SubscriberService } from './subscriber.service';
import { SubscriberController } from './subscriber.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Subscriber } from 'rxjs';

@Module({
  imports: [TypeOrmModule.forFeature([Subscriber])],
  controllers: [SubscriberController],
  providers: [SubscriberService],
})
export class SubscriberModule {}
