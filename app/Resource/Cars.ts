import CarModel from "App/Models/CarModel";

export default class Cars {

    public async findAll() {
        return await CarModel.all()
    }

    public async create(body: any) {

        let validation: String[] = []
        const car = {
            marca: body.marca ? body.marca: validation.push('Marca não pode estar vazio'),
            modelo: body.modelo ? body.modelo:  validation.push('Modelo não pode estar vazio'),
            ano: body.ano ? body.ano: 'Não informado',
            numero_viagens: body.numero_viagens ? body.numero_viagens: 0,
            consumo: body.consumo ? body.consumo: validation.push('Consumo não pode estar vazio'),
        }

        if (validation.length !== 0) return validation;
        return await CarModel.create(car);
    }

    public async createMany(body: any[]) {

        let validation: String[] = []
        const cars = body.map((car) => {
            return {
                modelo: car.CarModel,
                ano: car.CarYear,
                consumo_gas: car.AutoCityGas,
                consumo_gas_road: car.AutoCityAlc,
                consumo_alc: car.AutoRoadGas,
                consumo_alc_road: car.AutoRoadAlc,
            }
        })

        return await CarModel.createMany(cars);
    }

    public async search(body: any) {
        if (body.uuid) return 'É preciso passar o Uuid';
        const car = await CarModel.findBy('uuid', body.uuid);
        if (!car) return 'Carro não encontrado!';
        return car;
    }
}
