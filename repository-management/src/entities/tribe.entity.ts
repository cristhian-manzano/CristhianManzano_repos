import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'tribe' })
export class Tribe {
  @PrimaryGeneratedColumn()
  id_tribe: number;

  @Column({ nullable: false })
  name: string;

  @Column({ nullable: false })
  status: number;
}
