import { Injectable } from '@nestjs/common';
import { InjectEntityManager } from '@nestjs/typeorm';
import { EntityManager } from 'typeorm';

@Injectable()
export class InsertUserService {
  constructor(
    @InjectEntityManager()
    private readonly entityManager: EntityManager,
  ) {}

  async insertAdminUser(): Promise<void> {
    const existingUser = await this.entityManager.query(`
      SELECT email FROM users WHERE email IN('admin@library.com')
      `);
    if (existingUser.length > 0) {
      console.log('Admin already exists, skipping insertion.');
      return;
    }

    await this.entityManager.query(`
      INSERT INTO users (name, email, password, role_id, created_at, updated_at) VALUES ('admin', 'admin@library.com', '$2b$10$bwoSfZaHYiiuqIcIC4dT4Oug4sjnGvG2q4p50lfSkIDj1v.rzYSd2', 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
      `);
  }
  async insertVisitorUser(): Promise<void> {
    const existingUser = await this.entityManager.query(`
      SELECT email FROM users WHERE email IN('visitor@library.com')
      `);
    if (existingUser.length > 0) {
      console.log('Visitor already exists, skipping insertion.');
      return;
    }

    await this.entityManager.query(`
      INSERT INTO users (name, email, password, role_id, created_at, updated_at) VALUES ('visitor', 'visitor@library.com', '$2b$10$bwoSfZaHYiiuqIcIC4dT4Oug4sjnGvG2q4p50lfSkIDj1v.rzYSd2', 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
      `);
  }
}
