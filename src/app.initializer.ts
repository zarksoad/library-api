import { Injectable, OnModuleInit } from '@nestjs/common';
import { InsertUserService } from './auth/services/insert/user-insert.service';
import { RoleService } from './auth/services/insert/role-insert.service';


@Injectable()
export class AppInitializer implements OnModuleInit {
  constructor(
    private readonly roleService: RoleService,
    private readonly userService: InsertUserService,
  ) {}

  async onModuleInit() {
    await this.roleService.insertRoles();
    await this.userService.insertAdminUser();
    await this.userService.insertVisitorUser();
  }
}