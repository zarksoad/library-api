/* eslint-disable no-unused-vars */
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/auth/entities';
import { Repository } from 'typeorm';


interface IcheckUserExist {
  checkUser(email: string): Promise<User>;
}

@Injectable()
export class CheckUserExistService implements IcheckUserExist {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}
  async checkUser(email: string): Promise<User> {
    const user = await this.userRepository.findOne({
      where: { email },
      relations: ['role']
    });
    if (!user) {
      throw new NotFoundException("The user not found");
    }
    return user;
  }
}
