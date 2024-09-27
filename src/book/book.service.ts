import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { CreateBookService } from './services/create/create-book.service';
import { FindAllBooks } from './services/get-all/find-all-book.service';
import { Book } from './entities/book.entity';
import { FindBookById } from './services/git-by-id/get-book-by-id.service';
import { DeleteBookById } from './services/delete/delete.book.service';
import { UpdateBookService } from './services/update/update-book.service';

@Injectable()
export class BookService {
  constructor(
    private readonly createBook: CreateBookService,
    private readonly findAllBooks: FindAllBooks,
    private readonly findBookById: FindBookById,
    private readonly deleteBookById: DeleteBookById,
    private readonly updateBookService: UpdateBookService,
  ) {}

  create(createBookDto: CreateBookDto): Promise<Book> {
    return this.createBook.createBook(createBookDto);
  }

  async findAll(author?: string, genre?: string, publishedDate?: string): Promise<Book[]> {
    const books = await this.findAllBooks.getBooks(author, genre, publishedDate);

    if (!books.length) {
      throw new BadRequestException('No books found with the provided filters.');
    } 
    return books
  
  }


  async findOne(id: number): Promise<Book> {
    return await this.findBookById.findBook(id);
  }

  async update(id: number, updateBookDto: UpdateBookDto): Promise<Book> {
    return await this.updateBookService.updateBook(id, updateBookDto);
  }

  async remove(id: number): Promise<void> {
    await this.deleteBookById.DeleteBook(id);
  }
}
