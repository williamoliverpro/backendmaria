import { Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'
import { Customers } from './Customers';
import { Users } from './Users';

@Entity()
export class Adresses {

  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => Users, user => user.address, {
    onDelete: 'CASCADE'
  })
  @JoinColumn()
  user: Users;

  @OneToOne(() => Customers, customer => customer.address, {
    onDelete: 'CASCADE'
  })
  @JoinColumn()
  customer: Customers;

  @Column()
  cep: string

  @Column()
  city: string

  @Column()
  state: string

  @Column()
  neighborhood: string

  @Column()
  street: string

  @Column()
  number: string

  @Column()
  complement: string

  @Column()
  fixed_location: string

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}