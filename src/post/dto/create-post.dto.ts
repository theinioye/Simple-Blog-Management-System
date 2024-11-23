import { IsString, MinLength, MaxLength, IsBoolean } from 'class-validator';

export class CreatePostDto {
  @IsString({ message: 'Text must be a string' })
  @MinLength(20, { message: 'Text must be at least 20 words' })
  @MaxLength(200, { message: 'Text must be not exceed 200 words' })
  text: string;

  @IsString()
  @MinLength(5)
  @MaxLength(10)
  title: string;

  @IsBoolean()
  isMonetized: boolean;
}
