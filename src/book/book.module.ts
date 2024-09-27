import { Module } from '@nestjs/common';
import { BookService } from './book.service';
import { BookController } from './book.controller';
import { CreateBookService } from './services/create/create-book.service';
import { Book } from './entities/book.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FindAllBooks } from './services/get-all/find-all-book.service';
import { FindBookById } from './services/git-by-id/get-book-by-id.service';
import { CheckBookService } from './services/common/check-book-exist.service';
import { DeleteBookById } from './services/delete/delete.book.service';

@Module({
  imports: [TypeOrmModule.forFeature([Book])],
  controllers: [BookController],
  providers: [
    BookService,
    CreateBookService,
    FindAllBooks,
    FindBookById,
    CheckBookService,
    DeleteBookById
  ],
})
export class BookModule {}
