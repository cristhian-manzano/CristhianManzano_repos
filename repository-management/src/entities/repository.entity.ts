import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'repository' })
export class Repositories {
  @PrimaryGeneratedColumn()
  id_repository: number;

  @Column({ nullable: false })
  name: string;

  @Column('char', { length: 1, nullable: false })
  state: string;

  @CreateDateColumn()
  create_time: Date;

  @Column('char', { length: 1, nullable: false })
  status: string;
}
