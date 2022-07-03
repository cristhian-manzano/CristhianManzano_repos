import { Tribe } from './tribe.entity';
import { Metric } from './metrics.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'repository' })
export class Repository {
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

  @ManyToOne(() => Tribe, (tribe) => tribe.repositories)
  @JoinColumn({ name: 'id_tribe', referencedColumnName: 'id_tribe' })
  tribe: Tribe;

  @OneToOne(() => Metric)
  @JoinColumn({
    name: 'id_repository',
    referencedColumnName: 'id_repository',
  })
  metric: Metric;
}
