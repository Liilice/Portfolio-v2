import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsOptional, IsEmail } from 'class-validator';

export class sendEmailDto {
  @ApiProperty({
    description: 'email',
    example: 'portfolio@gmail.com',
  })
  @IsEmail({}, { each: true })
  @IsNotEmpty()
  readonly email: string;

  @ApiProperty({
    description: 'subject email',
    example: 'Information about your job search',
  })
  @IsString()
  @IsNotEmpty()
  readonly subject: string;

  @ApiProperty({
    description: 'Message',
    example: 'blablablablabla',
  })
  @IsNotEmpty()
  @IsString()
  readonly html: string;

  @IsOptional()
  @IsString()
  readonly text?: string;
}
