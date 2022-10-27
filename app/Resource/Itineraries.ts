import { ItineraryCreateDto } from "App/Dtos/itineraryCreate";
import ItineraryModel from "App/Models/ItineraryModel";


export default class Itinerariess {

    async findAll() {
        return await ItineraryModel.all()
    }

    async create(itineraryCreate: ItineraryCreateDto) {
        return await ItineraryModel.create(itineraryCreate);
    }

    async find(uuid: string) {
        return await ItineraryModel.findBy('uuid', uuid)
    }
}
