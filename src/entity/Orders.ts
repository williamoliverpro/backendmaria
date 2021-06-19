import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'
import { Customers } from './Customers';
import { Users } from './Users';

@Entity()
export class Orders {

  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Customers)
  costumer: Customers;

  @ManyToOne(() => Users)
  user: Users;

  @Column()
  status: string;

  @Column()
  via: string

  @Column()
  estimated_delivery_time: Date

  @Column()
  dispatched: Date

  @Column()
  subtotal: number

  @Column()
  delivery_fee: number

  @Column()
  total: number

  @Column()
  payment_method: string

  @Column()
  delivery_method: string

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}