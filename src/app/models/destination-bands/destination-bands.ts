export class DestinationBands {
    id: number | undefined;
    tadig: string | undefined;
    destination_band_name: string | undefined;
    destination_name: string | undefined;
    cc: string | undefined;
    area_code: string | undefined;
    identifier_type: string | undefined;
    identifier_number: string | undefined;
    type: string | undefined;
    

    constructor(destinationBands: Partial<DestinationBands>) {
        this.id = destinationBands.id;
        this.tadig = destinationBands.tadig;
        this.destination_band_name = destinationBands.destination_band_name;
        this.destination_name = destinationBands.destination_name;
        this.cc = destinationBands.cc;
        this.area_code = destinationBands.area_code;
        this.identifier_type = destinationBands.identifier_type;
        this.identifier_number = destinationBands.identifier_number;
        this.type = destinationBands.type;
    }

    public static fromDTO(dto: any): DestinationBands {
        return new DestinationBands({ ...dto });
    }

    public static fromArray(destinationBands: Partial<DestinationBands>[]): DestinationBands[] {
        return destinationBands.map((destinationBand) => new DestinationBands(destinationBand));
    }

    public static fromDTOArray(dtos: any[]): DestinationBands[] {
        return dtos.map((dto) => DestinationBands.fromDTO(dto));
    }
}