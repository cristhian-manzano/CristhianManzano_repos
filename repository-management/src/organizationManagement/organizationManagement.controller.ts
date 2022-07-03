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

import { CreateOrganizationDto } from './dto/createOrganizationDto';

import { OrganizationManagementService } from './organizationManagement.service';
import { Organization } from '../entities/organization.entity';
import { UpdateOrganizationDto } from './dto/updateOrganizationDto';

@Controller('organization')
export class OrganizationManagementController {
  constructor(
    private readonly organizationManagementService: OrganizationManagementService,
  ) {}

  @Post()
  async create(
    @Body() createOrganizationDto: CreateOrganizationDto,
  ): Promise<Organization> {
    return this.organizationManagementService.create(createOrganizationDto);
  }

  @Get()
  async findAll() {
    return this.organizationManagementService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return this.organizationManagementService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateOrganizationDto: UpdateOrganizationDto,
  ) {
    return this.organizationManagementService.update(id, updateOrganizationDto);
  }

  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number) {
    const deleted = await this.organizationManagementService.remove(id);

    if (deleted.affected === 0)
      throw new NotFoundException(`Organization with id ${id} not exist!`);
  }
}
