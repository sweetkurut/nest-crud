import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

// Создание сущности моделя
@Entity()
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  fullName: string;

  @Column()
  email: string;
}
