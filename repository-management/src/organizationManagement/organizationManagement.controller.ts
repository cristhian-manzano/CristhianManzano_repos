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
    const organization = await this.organizationManagementService.findOne(id);

    if (!organization)
      throw new NotFoundException(`Organization with id ${id} not found!`);

    return organization;
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateOrganizationManagementDto: {},
  ) {}

  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number) {
    const deleted = await this.organizationManagementService.remove(id);

    if (deleted.affected === 0)
      throw new NotFoundException(`Organization with id ${id} not exist!`);
  }
}
