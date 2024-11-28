import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostModule } from './post/post.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { pgconfig } from './dbConfig';
import { AuthorModule } from './author/author.module';
import { SubscriberModule } from './subscriber/subscriber.module';
import { AuthModule } from './auth/auth.module';
import { AuthService } from './auth/auth.service';

@Module({
  imports: [
    PostModule,
    TypeOrmModule.forRoot(pgconfig),
    AuthorModule,
    SubscriberModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService, AuthService],
})
export class AppModule {}
