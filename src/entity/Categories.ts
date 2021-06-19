import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'
import { Items } from './Items';
import { Users } from './Users';

@Entity()
export class Categories {

  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Users, user => user.categories, {
    onDelete: 'CASCADE'
  })
  user: Users;

  @OneToMany(() => Items, item => item.category, {
    eager: true
  })
  items: Items[];

  @Column()
  title: string;

  @Column({
    default: true
  })
  available: boolean

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}