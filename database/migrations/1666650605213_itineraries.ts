import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'itineraries'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {

      table.uuid('uuid').index()

      table.string('car_uuid').notNullable();
      table.decimal('distance').notNullable();
      table.decimal('consumption').notNullable();
      table.decimal('fuel_price').notNullable();
      table.decimal('travel_number').notNullable();

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
