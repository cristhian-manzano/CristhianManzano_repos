import { Module } from '@nestjs/common';
import { OrganizationManagementService } from './organization-management.service';
import { OrganizationManagementController } from './organization-management.controller';

@Module({
  controllers: [OrganizationManagementController],
  providers: [OrganizationManagementService],
})
export class OrganizationManagementModule {}
