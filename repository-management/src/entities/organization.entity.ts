import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Tribe } from './tribe.entity';

@Entity({ name: 'organization' })
export class Organization {
  @PrimaryGeneratedColumn()
  id_organization: number;

  @Column({ nullable: false })
  name: string;

  @Column({ nullable: false })
  status: number;

  @OneToMany(() => Tribe, (tribe) => tribe.organization)
  tribes: Tribe[];
}
