import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsDateString } from 'class-validator';

export class CreateBookDto {
  @ApiProperty({ description: 'The title of the book.', example: 'The Great Gatsby' })
  @IsNotEmpty()
  @IsString()
  title: string;

  @ApiProperty({ description: 'The author of the book.', example: 'F. Scott Fitzgerald' })
  @IsNotEmpty()
  @IsString()
  author: string;

  @ApiProperty({ description: 'The genre of the book.', example: 'Fiction' })
  @IsNotEmpty()
  @IsString()
  genre: string;

  @ApiProperty({ description: 'The published date of the book.', example: '2024-01-01' })
  @IsNotEmpty()
  @IsDateString()
  publishedDate: Date;
}
