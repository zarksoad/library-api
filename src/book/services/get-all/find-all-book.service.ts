import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Book } from 'src/book/entities/book.entity';
import { Repository } from 'typeorm';


@Injectable()
export class FindAllBooks {
  constructor(
    @InjectRepository(Book) private readonly bookRepository: Repository<Book>,
  ) {}

  async getBooks(author?: string, genre?: string, publishedDate?: string): Promise<Book[]> {
    const query = this.bookRepository.createQueryBuilder('book');

    if (author) {
      query.andWhere('book.author = :author', { author });
    }

    if (genre) {
      query.andWhere('book.genre = :genre', { genre });
    }

    if (publishedDate) {
      query.andWhere('DATE(book.publishedDate) = :publishedDate', { publishedDate });
    }

    return await query.getMany();
  }
}
