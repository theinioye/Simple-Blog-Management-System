import { IsEmail, IsString, MinLength, MaxLength } from 'class-validator';

export class CreateSubscriberDto {
  @IsString()
  @MinLength(4)
  @MaxLength(20)
  username: string;

  @IsString()
  @MinLength(4, { message: 'Password must be at least six letters' })
  password: string;
  @IsString()
  @IsEmail({}, { message: 'Not a valid email' })
  email: string;
}
