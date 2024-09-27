import { Test, TestingModule } from '@nestjs/testing';
import { CreateBookService } from './create-book.service';  
import { getRepositoryToken } from '@nestjs/typeorm';
import { Book } from 'src/book/entities/book.entity';
import { Repository } from 'typeorm';
import { CreateBookDto } from 'src/book/dto/create-book.dto';

describe('CreateBookService', () => {
  let service: CreateBookService;
  let repository: Repository<Book>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CreateBookService,
        {
          provide: getRepositoryToken(Book),
          useClass: Repository,
        },
      ],
    }).compile();

    service = module.get<CreateBookService>(CreateBookService);
    repository = module.get<Repository<Book>>(getRepositoryToken(Book));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('createBook', () => {
    it('should create a book and return it', async () => {
      const createBookDto: CreateBookDto = {
        title: 'Test Book',
        author: 'Test Author',
        genre: 'Fiction',
        publishedDate: new Date()
      };

      const bookEntity = {
        id: 1,
        ...createBookDto,
      };

      jest.spyOn(repository, 'create').mockReturnValue(bookEntity as Book);
      jest.spyOn(repository, 'save').mockResolvedValue(bookEntity as Book);

      const result = await service.createBook(createBookDto);

      expect(result).toEqual(bookEntity);
      expect(repository.create).toHaveBeenCalledWith(createBookDto);
      expect(repository.save).toHaveBeenCalledWith(bookEntity);
    });
  });
});
