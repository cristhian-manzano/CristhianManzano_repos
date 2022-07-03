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

@Controller('organization')
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
  async findOne(@Param('id', ParseIntPipe) id: number) {
    const organization = await this.organizationManagementService.findOne(id);

    if (!organization)
      throw new NotFoundException(`Organization with id ${id} not found!`);

    return organization;
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateOrganizationManagementDto: UpdateOrganizationManagementDto,
  ) {}

  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number) {
    const deleted = await this.organizationManagementService.remove(id);

    if (deleted.affected === 0)
      throw new NotFoundException(`Organization with id ${id} not exist!`);
  }
}
