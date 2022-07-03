import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { OrganizationManagementService } from './organization-management.service';
import { OrganizationManagementController } from './organization-management.controller';
import { Organization } from '../entities/organization.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Organization])],
  controllers: [OrganizationManagementController],
  providers: [OrganizationManagementService],
})
export class OrganizationManagementModule {}
