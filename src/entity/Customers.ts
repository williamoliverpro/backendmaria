import { Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'
import { Adresses } from './Adresses';

@Entity()
export class Customers {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  telephone: string;

  @OneToOne(() => Adresses, address => address.customer)
  @JoinColumn()
  address: Adresses;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}