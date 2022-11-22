import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('usuarios')
export default class UserEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({ name: 'nome', type: 'varchar' })
  nome: string;

  @Column({ name: 'senha', type: 'varchar' })
  senha: string;

  @Column({ name: 'ativo', type: 'boolean' })
  ativo: boolean;

  @Column({
    name: 'created_in',
    type: 'timestamp',
  })
  createdAt: Date;

  @Column({
    name: 'updated_in',
    type: 'timestamp',
  })
  updatedAt: Date;
}
