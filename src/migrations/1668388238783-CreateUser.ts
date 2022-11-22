import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateUser1668388238783 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'usuarios',
        columns: [
          {
            name: 'id',
            type: 'integer',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'nome',
            type: 'varchar(200)',
          },
          {
            name: 'senha',
            type: 'varchar(1000)',
          },
          {
            name: 'ativo',
            type: 'boolean',
          },
          {
            name: 'created_in',
            type: 'timestamp',
          },
          {
            name: 'updated_in',
            type: 'timestamp',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('usuarios');
  }
}
