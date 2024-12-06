import { MinLength, IsString } from 'class-validator';

export class updatePasswordDto {
  @IsString()
  @MinLength(4)
  password: string;
}
