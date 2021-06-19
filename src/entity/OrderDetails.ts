import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'
import { Items } from './Items';
import { Orders } from './Orders';

@Entity()
export class OrderDetails {

  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Orders)
  order: Orders;

  @OneToOne(() => Items)
  @JoinColumn()
  item: Items;

  @Column()
  amount: number;
  
  @Column()
  note: string

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}