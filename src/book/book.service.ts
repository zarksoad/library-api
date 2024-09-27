import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { CreateBookService } from './services/create/create-book.service';
import { FindAllBooks } from './services/get-all/find-all-book.service';
import { Book } from './entities/book.entity';
import { FindBookById } from './services/git-by-id/get-book-by-id.service';
import { DeleteBookById } from './services/delete/delete.book.service';

@Injectable()
export class BookService {
  constructor(
    private readonly createBook: CreateBookService,
    private readonly findAllBooks: FindAllBooks,
    private readonly findBookById: FindBookById,
    private readonly deleteBookById:DeleteBookById
  ) {}

  create(createBookDto: CreateBookDto): Promise<Book> {
    return this.createBook.createBook(createBookDto);
  }

  async findAll(): Promise<Book[]> {
    return await this.findAllBooks.findAll();
  }

  async findOne(id: number):Promise<Book> {
    return await this.findBookById.findBook(id);
  }

  update(id: number, updateBookDto: UpdateBookDto) {
    return `This action updates a #${id} book`;
  }

  async remove(id: number):Promise<void> {
   await this.deleteBookById.DeleteBook(id)
  }
}
