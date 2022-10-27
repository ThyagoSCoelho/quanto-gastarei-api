export class ItineraryCreateDto {
    car_uuid: string
    distance: number
    consumption: number
    fuel_price: number
    travel_number: number
}

export class ItineraryValidation {
    validation: Record<string, any> = [];
    itinerary: ItineraryCreateDto;

    constructor(body: Record<string, any>)
    {
        this.itinerary.car_uuid = body.car_uuid ? body.car_uuid: this.validation.push('Car is not selected');
        this.itinerary.consumption = body.consumption ? body.consumption: this.validation.push('consumption is not null');
        this.itinerary.distance = body.distance ? body.distance: this.validation.push('distance is not null');
        this.itinerary.fuel_price = body.fuel_price ? body.fuel_price: this.validation.push('fuel_price is not null');
        this.itinerary.travel_number = body.travel_number ? body.travel_number: this.validation.push('travel_number is not null');
    }

    validate() {
        if(this.validation) return this.validation; 
        return this.itinerary;
    }

}
