import { MigrationInterface, QueryRunner } from 'typeorm';

export default class AlterProviderFieldToProviderId1597013577383
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('appointments', 'provider');
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
