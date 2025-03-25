import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateContactDto } from './create-contact.dto';
import { IsOptional, IsString } from 'class-validator';

export class UpdateContactDto extends PartialType(CreateContactDto) {
  @ApiProperty({
    description: 'email',
    example: 'portfolio@gmail.com',
  })
  @IsString()
  @IsOptional()
  readonly email: string;

  @ApiProperty({
    description: 'subject email',
    example: 'Information about your job search',
  })
  @IsString()
  @IsOptional()
  readonly object: string;

  @ApiProperty({
    description: 'Message',
    example: 'blablablablabla',
  })
  @IsString()
  @IsOptional()
  readonly message: string;
}
