import { DateTime } from 'luxon'
import { BaseModel, beforeCreate, column } from '@ioc:Adonis/Lucid/Orm'
import { v4 as uuid } from 'uuid'

export default class ItineraryModel extends BaseModel {
  public static table = 'itineraries'

  public static selfAssignPrimaryKey = true

  @column({ 
    isPrimary: true,
    prepare: (value: string) => value ? value : uuid()
  })
  public uuid: string

  @column()
  public car_uuid?: string

  @column()
  public distance: number;

  @column()
  public consumption: number;

  @column()
  public fuel_price: number;

  @column()
  public travel_number?: number;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @beforeCreate()
  public static async createUUID (model: ItineraryModel) {
    model.uuid = uuid()
  }
}

/**
 * ----Gasto no Trajeto
 * 
 * Distancia de Km
 * Autonomia do  carro por Km 
 * Preço do combustivel 
 * numero de viagem que ira fazer
**/
