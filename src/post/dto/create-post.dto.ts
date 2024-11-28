import { IsString, MinLength, MaxLength, IsBoolean } from 'class-validator';

export class CreatePostDto {
  @IsString({ message: 'Text must be a string' })
  @MinLength(20, { message: 'Text must be at least 20 letters' })
  @MaxLength(200, { message: 'Text must be not exceed 200 letters' })
  text: string;

  @IsString()
  @MinLength(5)
  @MaxLength(100)
  title: string;

  @IsBoolean()
  readonly isMonetized: boolean;
}
