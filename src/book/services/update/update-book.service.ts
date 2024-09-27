import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Book } from 'src/book/entities/book.entity';
import { UpdateBookDto } from 'src/book/dto/update-book.dto';
import { CheckBookService } from '../common/check-book-exist.service';

@Injectable()
export class UpdateBookService {
  constructor(
    private readonly findBookService: CheckBookService,
    @InjectRepository(Book)
    private readonly bookRepository: Repository<Book>,
  ) {}

  async updateBook(id: number, updateBookDto: UpdateBookDto): Promise<Book> {
    const book = await this.findBookService.checkBook(id);
    
    Object.assign(book, updateBookDto);
    
    return await this.bookRepository.save(book);
  }
}
