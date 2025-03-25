import { Module } from '@nestjs/common';
import { ContactService } from './contact.service';
import { ContactController } from './contact.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Contact } from './entities/contact.entity';
import { EmailService } from 'src/email/email.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [TypeOrmModule.forFeature([Contact]),ConfigModule],
  controllers: [ContactController],
  providers: [ContactService, EmailService],
  exports: [ContactService]
})
export class ContactModule {}
