import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('favorite_movies')
export default class FavoriteMoviesEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({ name: 'titulo', type: 'varchar' })
  titulo: string;

  @Column({ name: 'imagem', type: 'varchar' })
  imagem: string;

  @Column({
    name: 'created_in',
    type: 'timestamp',
  })
  created_in: Date;

  @Column({
    name: 'updated_in',
    type: 'timestamp',
  })
  updated_in: Date;

  @Column({ name: 'user_id', type: 'integer' })
  user_id: number;
}
