import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class loginAuthDto {
  @ApiProperty({
    description: 'The email of the user for authentication.',
    example: 'user@example.com',
  })
  @IsEmail()
  @IsNotEmpty()
  @IsString()
  email: string;

  @ApiProperty({
    description: 'The password of the user for authentication.',
    example: 'strongPassword123',
  })
  @IsNotEmpty()
  @IsString()
  password: string;
}
