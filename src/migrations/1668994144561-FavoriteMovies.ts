import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class FavoriteMovies1668994144561 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'favorite_movies',
        columns: [
          {
            name: 'id',
            type: 'integer',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'titulo',
            type: 'varchar(200)',
          },
          {
            name: 'imagem',
            type: 'varchar(1000)',
          },
          {
            name: 'created_in',
            type: 'timestamp',
          },
          {
            name: 'updated_in',
            type: 'timestamp',
          },
          {
            name: 'user_id',
            type: 'integer',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('favorite_movies');
  }
}
