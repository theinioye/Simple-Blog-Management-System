import { IsString, IsStrongPassword, MaxLength } from 'class-validator';
import { MinLength } from 'class-validator';

export class signInDto {
  @IsString({ message: 'Not a string' })
  @MinLength(5)
  @MaxLength(10)
  username: string;

  @IsString()
  @IsStrongPassword()
  password: string;
}
