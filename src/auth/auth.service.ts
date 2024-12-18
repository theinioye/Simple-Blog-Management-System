import { Injectable, UnauthorizedException } from '@nestjs/common';
// import { CreateAuthDto } from './dto/create-auth.dto';
// import { UpdateAuthDto } from './dto/update-auth.dto'
import { JwtService } from '@nestjs/jwt';
import { SubscriberService } from 'src/subscriber/subscriber.service';
import { comparehash } from 'src/subscriber/utils';

@Injectable()
export class AuthService {
  constructor(
    private subscriberservice: SubscriberService,
    private jwtService: JwtService,
  ) {}

  async signIn(
    username: string,
    pass: string,
  ): Promise<{ access_token: string }> {
    const user = await this.subscriberservice.findByUsername(username);

    const isMatch = await comparehash(pass, user.password);

    if (!user || !isMatch) {
      throw new UnauthorizedException();
    }

    const payload = { sub: user.id, username: user.username };

    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
