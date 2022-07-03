import { PartialType } from '@nestjs/mapped-types';
import { CreateOrganizationDto } from './createOrganizationDto';

export class UpdateOrganizationDto extends PartialType(CreateOrganizationDto) {}
