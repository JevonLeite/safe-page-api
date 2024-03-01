import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';
import { Exclude } from 'class-transformer';

@Entity({ database: 'safe_page', name: 'users' })
export default class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Exclude()
  @CreateDateColumn()
  created_at: Date
}
