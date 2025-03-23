import { IsNotEmpty, IsString, IsOptional, IsEmail } from 'class-validator';

export class sendEmailDto {
  @IsEmail({}, { each: true })
  email: string;

  @IsString()
  subject: string;

  @IsString()
  html: string;

  @IsOptional()
  @IsString()
  text?: string;
}
