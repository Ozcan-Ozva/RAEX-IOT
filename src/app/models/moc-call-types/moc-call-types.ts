export class MocCallTypes {
    id: number | undefined;
    tadig: string | undefined;
    normalized_pricing_definition: string | undefined;
    services: string | undefined;
    location: string | undefined;
    

    constructor(mocCallTypes: Partial<MocCallTypes>) {
        this.id = mocCallTypes.id;
        this.tadig = mocCallTypes.tadig;
        this.normalized_pricing_definition = mocCallTypes.normalized_pricing_definition;
        this.services = mocCallTypes.services;
        this.location = mocCallTypes.location;
    }

    public static fromDTO(dto: any): MocCallTypes {
        return new MocCallTypes({ ...dto });
    }

    public static fromArray(mocCallTypes: Partial<MocCallTypes>[]): MocCallTypes[] {
        return mocCallTypes.map((mocCallType) => new MocCallTypes(mocCallType));
    }

    public static fromDTOArray(dtos: any[]): MocCallTypes[] {
        return dtos.map((dto) => MocCallTypes.fromDTO(dto));
    }
}