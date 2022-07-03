import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
  NotFoundException,
} from '@nestjs/common';
import { OrganizationManagementService } from './organization-management.service';
import { CreateOrganizationManagementDto } from './dto/create-organization-management.dto';
import { UpdateOrganizationManagementDto } from './dto/update-organization-management.dto';

@Controller('organization-management')
export class OrganizationManagementController {
  constructor(
    private readonly organizationManagementService: OrganizationManagementService,
  ) {}

  @Post()
  create(
    @Body() createOrganizationManagementDto: CreateOrganizationManagementDto,
  ) {}

  @Get()
  async findAll() {
    return this.organizationManagementService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {}

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateOrganizationManagementDto: UpdateOrganizationManagementDto,
  ) {}

  @Delete(':id')
  remove(@Param('id') id: string) {}
}
