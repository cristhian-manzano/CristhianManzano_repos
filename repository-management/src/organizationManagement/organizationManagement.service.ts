import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Organization } from '../entities/organization.entity';
import { UpdateOrganizationDto } from './dto/updateOrganizationDto';

@Injectable()
export class OrganizationManagementService {
  constructor(
    @InjectRepository(Organization)
    private readonly organization: Repository<Organization>,
  ) {}

  create(createOrganizationManagementDto: {}) {}

  findAll() {
    return this.organization.find();
  }


  async update(
    id: number,
    updateOrganizationDto: Partial<UpdateOrganizationDto>,
  ) {
    const organization = await this.findOne(id);

    if (!organization) {
      throw new NotFoundException('Organization does not exists!');
  }

    const updatedOrganization = Object.assign(
      organization,
      updateOrganizationDto,
    );

    return this.organization.save(updatedOrganization);
  }

  remove(id: number) {
    return this.organization.delete(id);
  }
}
