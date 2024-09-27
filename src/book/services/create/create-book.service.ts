import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateBookDto } from 'src/book/dto/create-book.dto';
import { Book } from 'src/book/entities/book.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CreateBookService {
  constructor(
    @InjectRepository(Book) private readonly bookRepository: Repository<Book>,
  ) {}

  async createBook(createBook: CreateBookDto): Promise<Book> {
    const book = await this.bookRepository.create(createBook);
    return this.bookRepository.save(book);
  }
}
