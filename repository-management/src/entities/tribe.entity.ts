import { Repository } from './repository.entity';
import { Organization } from './organization.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'tribe' })
export class Tribe {
  @PrimaryGeneratedColumn()
  id_tribe: number;

  @Column({ nullable: false })
  name: string;

  @Column({ nullable: false })
  status: number;

  @OneToMany(() => Repository, (repository) => repository.tribe)
  repositories: Repository[];

  @ManyToOne(() => Organization, (organization) => organization.tribes)
  @JoinColumn({
    name: 'id_organization',
    referencedColumnName: 'id_organization',
  })
  organization: Organization;
}
