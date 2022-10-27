import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Cars from 'App/Resource/Cars';

export default class CarsController {

    public async store({request}: HttpContextContract) {
        const car = new Cars;
        return await car.create(request.body()); 
    }

    public async index() {
        return await (new Cars).findAll();
    }

    public async search({request}: HttpContextContract) {
        const car = new Cars;
        return await car.search(request.body() as any);
    }

    //desactivate
    public async delete(id: number) {}
}
