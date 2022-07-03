import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'organization' })
export class Organization {
  @PrimaryGeneratedColumn()
  id_organization: number;

  @Column({ nullable: false })
  name: string;

  @Column({ nullable: false })
  status: number;
}
