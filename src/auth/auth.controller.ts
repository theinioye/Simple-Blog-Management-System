import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { Public } from 'src/SkipAuth';
import { AuthService } from './auth.service';
import { AuthGuard } from './authguard';
import { signInDto } from './dto/signIn-auth.dto';
// import { CreateAuthDto } from './dto/create-auth.dto';
// import { UpdateAuthDto } from './dto/update-auth.dto';
// import { SubscriberService } from 'src/subscriber/subscriber.service';
// import { Http2ServerRequest } from 'http2';
// import { signInDto } from './dto/signIn-auth.dto';

@Controller('login')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Public()
  @HttpCode(HttpStatus.OK)
  @Post()
  async SignIn(@Body() signInDto: signInDto) {
    return this.authService.signIn(signInDto.username, signInDto.password);
  }
  @UseGuards(AuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
