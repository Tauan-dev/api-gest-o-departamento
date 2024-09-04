import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateDisciplinaTable1725477146996 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'disciplina',
        columns: [
          {
            name: 'id',
            type: ' integer',
            isPrimary: true,
            isGenerated: true,
          },
          {
            name: 'cod',
            type: 'varchar',
          },
          {
            name: 'nome',
            type: 'varchar',
          },
          {
            name: 'cargaHoraria',
            type: 'interger',
          },
          {
            name: 'qt_credito',
            type: 'interger',
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('disciplina');
  }
}
