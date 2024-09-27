import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Book } from 'src/book/entities/book.entity';
import { Repository } from 'typeorm';

@Injectable()
export class FindAllBooks {
  constructor(
    @InjectRepository(Book) private readonly bookRepository: Repository<Book>,
  ) {}

  async findAll(): Promise<Book[]> {
    return await this.bookRepository.find();
  }
}
