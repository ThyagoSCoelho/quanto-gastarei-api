import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'cars'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {

      table.uuid('uuid').index()

      table.string('marca').nullable()
      table.string('modelo').nullable()
      table.string('ano').nullable()
      table.decimal('consumo_gas').nullable()
      table.decimal('consumo_gas_road').nullable()
      table.decimal('consumo_alc').nullable()
      table.decimal('consumo_alc_road').nullable()

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
