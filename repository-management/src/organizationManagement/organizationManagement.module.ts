import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { OrganizationManagementService } from './organizationManagement.service';
import { OrganizationManagementController } from './organizationManagement.controller';
import { Organization } from '../entities/organization.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Organization])],
  controllers: [OrganizationManagementController],
  providers: [OrganizationManagementService],
})
export class OrganizationManagementModule {}
