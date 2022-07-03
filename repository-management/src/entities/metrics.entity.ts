import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Repository } from './repository.entity';

@Entity({ name: 'metrics' })
export class Metric {
  @PrimaryGeneratedColumn()
  id_repository: number;

  @Column()
  coverage: number;

  @Column()
  bugs: number;

  @Column()
  vulnerabilities: number;

  @Column()
  hotspot: number;

  @Column()
  code_smells: number;

  @OneToOne(() => Repository)
  @JoinColumn({
    name: 'id_repository',
    referencedColumnName: 'id_repository',
  })
  repository: Repository;
}
