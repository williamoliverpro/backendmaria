import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'
import { Categories } from './Categories';

@Entity()
export class Items {

  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Categories, category => category.items, {
    onDelete: 'CASCADE'
  })
  category: Categories;

  @Column()
  title: string;

  @Column()
  image_url: string;

  @Column()
  price: number

  @Column({
    default: true
  })
  available: boolean

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}