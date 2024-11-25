import {
  IsEmail,
  IsString,
  IsStrongPassword,
  MinLength,
  MaxLength,
} from 'class-validator';

export class CreateAuthorDto {
  @IsString()
  @MinLength(4)
  @MaxLength(20)
  name: string;

  @IsString()
  @IsEmail()
  email: string;

  @IsString()
  @IsStrongPassword()
  password: string;
}
