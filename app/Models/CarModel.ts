import { DateTime } from 'luxon'
import { BaseModel, beforeCreate, column } from '@ioc:Adonis/Lucid/Orm'
import { v4 as uuid } from 'uuid'

export default class CarModel extends BaseModel {
  public static table = 'cars'

  public static selfAssignPrimaryKey = true

  @column({ 
    isPrimary: true,
    prepare: (value: string) => value ? value : uuid()
  })
  public uuid: string

  @column()
  public marca?: string

  @column()
  public modelo?: string

  @column()
  public ano?: string

  @column()
  public consumo_gas?: number
  
  @column()
  public consumo_gas_road?: number
  
  @column()
  public consumo_alc?: number
  
  @column()
  public consumo_alc_road?: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @beforeCreate()
  public static async createUUID (model: CarModel) {
    model.uuid = uuid()
  }

}

/**
 * 
 * ----Gasto no Trajeto
 * 
 * Distancia de Km
 * Autonomia do  carro por Km 
 * Preço do combustivel 
 * numero de viagem que ira fazer
 * 
 * -----Cadastrar o Carro
 * marca
 * modelo do carro
 * ano do carro
 * consumo medio do carro
 * combustivel
 * 
 * 
 * 
 * 
 * 
 * **/