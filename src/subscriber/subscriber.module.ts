import { Module } from '@nestjs/common';
import { SubscriberService } from './subscriber.service';
import { SubscriberController } from './subscriber.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Subscriber } from 'rxjs';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from 'src/auth/authguard';
// import { APP_GUARD } from '@nestjs/core';
// import { AuthGuard } from 'src/auth/authguard';

@Module({
  imports: [TypeOrmModule.forFeature([Subscriber])],
  controllers: [SubscriberController],
  providers: [SubscriberService],
  exports: [SubscriberService],
})
export class SubscriberModule {}
