import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Organization } from '../entities/organization.entity';

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

  findOne(id: number) {
    return this.organization.findOneBy({ id_organization: id });
  }

  update(id: number, {}) {}

  remove(id: number) {}
}
