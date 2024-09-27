import { Injectable } from "@nestjs/common";
import { Book } from "src/book/entities/book.entity";
import { CheckBookService } from "../common/check-book-exist.service";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

@Injectable()
export class DeleteBookById{
    constructor(private readonly findBookService:CheckBookService,
        @InjectRepository(Book) private readonly bookRepository:Repository<Book>
    ){}

    async DeleteBook(id:number):Promise<void>{
        const book = await this.findBookService.checkBook(id)
        await this.bookRepository.delete({id:book.id})
    }

}