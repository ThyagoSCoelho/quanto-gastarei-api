import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { ItineraryCreateDto, ItineraryValidation } from 'App/Dtos/itineraryCreate';
import Itineraries from "App/Resource/Itineraries";

export default class ItinerariesController {

    public async store({request}: HttpContextContract) {
        const {validation, itinerary} = new ItineraryValidation(request.body()).validate();
        if(validation) return validation;
        return await (new Itineraries()).create(itinerary);
    }

    public async index() {
        return await (new Itineraries()).findAll();
    }

    public async show({params}: HttpContextContract) {
        const uuid = params;
        return await (new Itineraries()).find(uuid as any);
    }

    public async search({request}: HttpContextContract) {
        const uuid = request.body().uuid;
        return await (new Itineraries()).find(uuid as any);
    }

    //desactivate
    public async delete(id: number) {}
}
