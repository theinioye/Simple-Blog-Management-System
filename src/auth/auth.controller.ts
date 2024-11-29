import {
  Controller,
  // Get,
  Post,
  Body,
  Get,
  HttpStatus,
  HttpCode,
  UseGuards,
  Request,
  // Patch,
  // Param,
  // Delete,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from './authguard';
import { signInDto } from './dto/signIn-auth.dto';
import { Public } from 'src/SkipAuth';
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

// @Post()
// create(@Body() createAuthDto: CreateAuthDto) {
//   return this.authService.create(createAuthDto);
// }

// @Get()
// findAll() {
//   return this.authService.findAll();
// }

// @Get(':id')
// findOne(@Param('id') id: string) {
//   return this.authService.findOne(+id);
// }

// @Patch(':id')
// update(@Param('id') id: string, @Body() updateAuthDto: UpdateAuthDto) {
//   return this.authService.update(+id, updateAuthDto);
// }

// @Delete(':id')
// remove(@Param('id') id: string) {
//   return this.authService.remove(+id);
//
