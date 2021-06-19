import { Column, CreateDateColumn, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'
import { Adresses } from './Adresses';
import { Categories } from './Categories';

@Entity()
export class Users {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  telephone: string;

  @OneToOne(() => Adresses, address => address.user)
  @JoinColumn()
  address: Adresses;

  @OneToMany(() => Categories, category => category.user)
  categories: Categories;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}