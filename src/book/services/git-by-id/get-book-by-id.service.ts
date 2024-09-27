import { Injectable } from '@nestjs/common';
import { CheckBookService } from '../common/check-book-exist.service';
import { Book } from 'src/book/entities/book.entity';

@Injectable()
export class FindBookById {
  constructor(private readonly findBookService: CheckBookService) {}

  async findBook(id: number): Promise<Book> {
    const book = await this.findBookService.checkBook(id);
    return book;
  }
}
