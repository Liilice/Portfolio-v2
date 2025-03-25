import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Contact } from './entities/contact.entity';
import { Repository } from 'typeorm';
import { EmailService } from 'src/email/email.service';
import { sendEmailDto } from 'src/email/dto/email.dto';

@Injectable()
export class ContactService {
  constructor(
    @InjectRepository(Contact)
    private readonly contactRepository: Repository<Contact>,
    private emailService: EmailService,
  ) {}

  async findAll(): Promise<Contact[]> {
    return await this.contactRepository.find();
  }

  async findOne(id: number): Promise<Contact | null> {
    return await this.contactRepository.findOneBy({ id });
  }

  async findByEmail(email: string): Promise<Contact[]> {
    return await this.contactRepository.findBy({ email });
  }

  async create(createContactDto: sendEmailDto) {
    await this.emailService.sendEmail(createContactDto);
    const contact = this.contactRepository.create(createContactDto);
    return await this.contactRepository.save(contact);
  }

  async update(
    id: number,
    updateContactDto: UpdateContactDto,
  ): Promise<Contact> {
    const contact = await this.contactRepository.findOneBy({ id });
    if (contact) {
      return this.contactRepository.merge(contact, updateContactDto);
    } else {
      throw new NotFoundException(`Mail not found`);
    }
  }

  async remove(id: number): Promise<{ affected?: number | null }> {
    return this.contactRepository.delete(id);
  }
}
