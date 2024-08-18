export class ChargingSpot {
    id: number;
    location: string;
    brand: string;
    available: boolean;
    pricePerHour: number;
  
    constructor(
      id: number = 0,
      location: string = '',
      brand: string = '',
      available: boolean = false,
      pricePerHour: number = 0
    ) {
      this.id = id;
      this.location = location;
      this.brand = brand;
      this.available = available;
      this.pricePerHour = pricePerHour;
    }
  }
  