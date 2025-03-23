import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateContactDto {
    @ApiProperty({
        description: "email",
        example:"portfolio@gmail.com",
    })
    @IsString()
    @IsNotEmpty()
    readonly email:string;

    @ApiProperty({
        description: "subject email",
        example: "Information about your job search"
    })
    @IsString()
    @IsNotEmpty()
    readonly object: string

    @ApiProperty({
        description: "Message",
        example: "blablablablabla"
    })
    @IsString()
    @IsNotEmpty()
    readonly message: string;
}
